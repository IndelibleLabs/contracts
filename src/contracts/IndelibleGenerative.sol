
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.4;

    import "erc721a/contracts/ERC721A.sol";
    import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
    import "@openzeppelin/contracts/access/Ownable.sol";
    import "@openzeppelin/contracts/utils/Base64.sol";
    import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
    import "@openzeppelin/contracts/utils/Address.sol";
    import "./SSTORE2.sol";
    import "./DynamicBuffer.sol";
    import "./HelperLib.sol";

    contract IndelibleGenerative is ERC721A, ReentrancyGuard, Ownable {
        using HelperLib for uint;
        using DynamicBuffer for bytes;

        struct LinkedTraitDTO {
            uint[] traitA;
            uint[] traitB;
        }

        struct TraitDTO {
            string name;
            string mimetype;
            bytes data;
            bool hidden;
            bool useExistingData;
            uint existingDataIndex;
        }
        
        struct Trait {
            string name;
            string mimetype;
            bool hidden;
        }

        struct ContractData {
            string name;
            string description;
            string image;
            string banner;
            string website;
            uint royalties;
            string royaltiesRecipient;
        }

        struct WithdrawRecipient {
            string name;
            string imageUrl;
            address recipientAddress;
            uint percentage;
        }

        mapping(uint => address[]) internal _traitDataPointers;
        mapping(uint => mapping(uint => Trait)) internal _traitDetails;
        mapping(uint => bool) internal _renderTokenOffChain;
        mapping(uint => mapping(uint => uint[])) internal _linkedTraits;

        uint[15] private PRIME_NUMBERS;
        uint private constant DEVELOPER_FEE = 250; // of 10,000 = 2.5%
        uint private constant NUM_LAYERS = 9;
        uint private constant MAX_BATCH_MINT = 20;
        uint[][NUM_LAYERS] private TIERS;
        string[] private LAYER_NAMES = [unicode"example1😃", unicode"example2😃", unicode"example3😃", unicode"example4😃", unicode"example5😃", unicode"example6😃", unicode"example7😃", unicode"example8😃", unicode"example9😃"];
            bool private shouldWrapSVG = true;
            string private backgroundColor = "transparent";
        uint private randomSeedData;
            
        WithdrawRecipient[2] public withdrawRecipients;
        bool public isContractSealed;
        uint public constant maxSupply = 2000;
        uint public maxPerAddress = 100;
        uint public publicMintPrice = 0.005 ether;
        string public baseURI = "";
        bool public isPublicMintActive;
        bytes32 private merkleRoot = 0;
        uint public allowListPrice = 0 ether;
        uint public maxPerAllowList = 1;
        bool public isAllowListActive;

        ContractData public contractData = ContractData(unicode"Example & Fren ” 😃", unicode"Example's (\"Description\")", "", "", "https://indeliblelabs.io", 0, "");

        constructor() ERC721A(unicode"Example & Fren ” 😃", unicode"EXPL😃") {
            TIERS[0] = [2,5,10,30,40,50,1863];
TIERS[1] = [40,80,100,120,160,200,250,300,350,400];
TIERS[2] = [10,15,20,35,50,60,65,70,75,80,90,95,150,170,180,190,200,215,230];
TIERS[3] = [10,15,20,35,50,60,70,75,80,110,115,160,220,230,240,250,260];
TIERS[4] = [200,250,280,290,300,330,350];
TIERS[5] = [200,300,400,500,600];
TIERS[6] = [40,45,55,65,80,85,95,100,110,115,120,150,220,230,240,250];
TIERS[7] = [50,750,1200];
TIERS[8] = [10,80,100,180,200,210,220,230,240,260,270];
            withdrawRecipients[0] = WithdrawRecipient(unicode"test1",unicode"", 0x10EC407c925A95FC2Bf145Bc671A733D1fBa347E, 4000);
withdrawRecipients[1] = WithdrawRecipient(unicode"test2",unicode"", 0x2052051A0474fB0B98283b3F38C13b0B0B6a3677, 2000);
            PRIME_NUMBERS = [
                110503, 132049, 216091, 756839, 859433, 1257787, 1398269, 2976221,
                3021377, 6972593, 13466917, 20996011, 24036583, 25964951, 30402457
            ];
            randomSeedData = uint(
                keccak256(
                    abi.encodePacked(
                        tx.gasprice,
                        block.number,
                        block.timestamp,
                        block.difficulty,
                        blockhash(block.number - 1),
                        msg.sender
                    )
                )
            );
        }

        modifier whenMintActive() {
            require(isMintActive(), "Minting is not active");
            _;
        }

        modifier whenUnsealed() {
            require(!isContractSealed, "Contract is sealed");
            _;
        }

        receive() external payable {
            require(isPublicMintActive, "Public minting is not active");
            handleMint(msg.value / publicMintPrice, msg.sender);
        }

        function rarityGen(uint _randinput, uint _rarityTier)
            internal
            view
            returns (uint)
        {
            uint currentLowerBound = 0;
            for (uint i = 0; i < TIERS[_rarityTier].length; i++) {
                uint thisPercentage = TIERS[_rarityTier][i];
                if (
                    _randinput >= currentLowerBound &&
                    _randinput < currentLowerBound + thisPercentage
                ) return i;
                currentLowerBound = currentLowerBound + thisPercentage;
            }

            revert();
        }
        
        function entropyForExtraData() internal view returns (uint24) {
            uint randomNumber = uint(
                keccak256(
                    abi.encodePacked(
                        tx.gasprice,
                        block.number,
                        block.timestamp,
                        block.difficulty,
                        blockhash(block.number - 1),
                        msg.sender
                    )
                )
            );
            return uint24(randomNumber);
        }
        
        function stringCompare(string memory a, string memory b) internal pure returns (bool) {
            return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
        }

        function tokensAreDuplicates(uint tokenIdA, uint tokenIdB) public view returns (bool) {
            return stringCompare(
                tokenIdToHash(tokenIdA),
                tokenIdToHash(tokenIdB)
            );
        }
        
        function reRollDuplicate(
            uint tokenIdA,
            uint tokenIdB
        ) public whenUnsealed {
            require(tokensAreDuplicates(tokenIdA, tokenIdB), "All tokens must be duplicates");

            uint largerTokenId = tokenIdA > tokenIdB ? tokenIdA : tokenIdB;

            if (msg.sender != owner()) {
                require(msg.sender == ownerOf(largerTokenId), "Only the token owner or contract owner can re-roll");
            }
            
            _initializeOwnershipAt(largerTokenId);
            if (_exists(largerTokenId + 1)) {
                _initializeOwnershipAt(largerTokenId + 1);
            }

            _setExtraDataAt(largerTokenId, entropyForExtraData());
        }
        
        function _extraData(
            address from,
            address to,
            uint24 previousExtraData
        ) internal view virtual override returns (uint24) {
            return from == address(0) ? uint24(0) : previousExtraData;
        }

        function getTokenSeed(uint _tokenId) internal view returns (uint24) {
            return _ownershipOf(_tokenId).extraData;
        }

        function tokenIdToHash(
            uint _tokenId
        ) public view returns (string memory) {
            require(_exists(_tokenId), "Invalid token");
            // This will generate a NUM_LAYERS * 3 character string.
            bytes memory hashBytes = DynamicBuffer.allocate(NUM_LAYERS * 4);

            uint[] memory hash = new uint[](NUM_LAYERS);
            bool[] memory modifiedLayers = new bool[](NUM_LAYERS);

            for (uint i = 0; i < NUM_LAYERS; i++) {
                uint traitIndex = hash[i];
                if (modifiedLayers[i] == false) {
                    uint tokenExtraData = getTokenSeed(_tokenId);
                    uint traitSeed;
                    if (tokenExtraData == 0) {
                        traitSeed = uint(
                            uint(randomSeedData) % maxSupply
                        );
                    } else {
                        traitSeed = uint(
                            uint(tokenExtraData) % maxSupply
                        );
                    }
                    uint traitRandomPosition = ((_tokenId + traitSeed) * PRIME_NUMBERS[i]) % maxSupply;
    
                    traitIndex = rarityGen(traitRandomPosition, i);
                    hash[i] = traitIndex;
                }

                if (_linkedTraits[i][traitIndex].length > 0) {
                    hash[_linkedTraits[i][traitIndex][0]] = _linkedTraits[i][traitIndex][1];
                    modifiedLayers[_linkedTraits[i][traitIndex][0]] = true;
                }
            }

            for (uint i = 0; i < hash.length; i++) {
                if (hash[i] < 10) {
                    hashBytes.appendSafe("00");
                } else if (hash[i] < 100) {
                    hashBytes.appendSafe("0");
                }
                if (hash[i] > 999) {
                    hashBytes.appendSafe("999");
                } else {
                    hashBytes.appendSafe(bytes(_toString(hash[i])));
                }
            }

            return string(hashBytes);
        }

        function handleMint(uint256 count, address recipient) internal whenMintActive returns (uint256) {
            uint256 totalMinted = _totalMinted();
            require(count > 0, "Invalid token count");
            require(totalMinted + count <= maxSupply, "All tokens are gone");

            if (isPublicMintActive) {
                if (msg.sender != owner()) {
                    require(_numberMinted(msg.sender) + count <= maxPerAddress, "Exceeded max mints allowed");
                }
                require(msg.sender == tx.origin, "EOAs only");
                require(count * publicMintPrice == msg.value, "Incorrect amount of ether sent");
            }

            uint256 batchCount = count / MAX_BATCH_MINT;
            uint256 remainder = count % MAX_BATCH_MINT;

            for (uint256 i = 0; i < batchCount; i++) {
                _mint(recipient, MAX_BATCH_MINT);
            }

            if (remainder > 0) {
                _mint(recipient, remainder);
            }

            return totalMinted;
        }

        function mint(uint256 count, bytes32[] calldata merkleProof)
            external
            payable
            nonReentrant
            whenMintActive
            returns (uint)
        {
            if (!isPublicMintActive) {
                if (msg.sender != owner()) {
                    require(onAllowList(msg.sender, merkleProof), "Not on allow list");
                    require(_numberMinted(msg.sender) + count <= maxPerAllowList, "Exceeded max mints allowed");
                }
                require(count * allowListPrice == msg.value, "Incorrect amount of ether sent");
            }
            return handleMint(count, msg.sender);
        }

        function airdrop(uint256 count, address recipient)
            external
            payable
            nonReentrant
            whenMintActive
            returns (uint)
        {
            require(isPublicMintActive, "Public minting is not active");
            return handleMint(count, recipient);
        }

        function isMintActive() public view returns (bool) {
            return _totalMinted() < maxSupply && (isPublicMintActive || isAllowListActive);
        }

        function hashToSVG(string memory _hash)
            public
            view
            returns (string memory)
        {
            uint thisTraitIndex;
            
            bytes memory svgBytes = DynamicBuffer.allocate(1024 * 128);
            svgBytes.appendSafe('<svg width="1200" height="1200" viewBox="0 0 1200 1200" version="1.2" xmlns="http://www.w3.org/2000/svg" style="background-color:');
            svgBytes.appendSafe(
                abi.encodePacked(
                    backgroundColor,
                    ";background-image:url("
                )
            );

            for (uint i = 0; i < NUM_LAYERS - 1; i++) {
                thisTraitIndex = HelperLib.parseInt(
                    HelperLib._substring(_hash, (i * 3), (i * 3) + 3)
                );
                if (_traitDetails[i][thisTraitIndex].hidden == false) {
                    svgBytes.appendSafe(
                        abi.encodePacked(
                            "data:",
                            _traitDetails[i][thisTraitIndex].mimetype,
                            ";base64,",
                            Base64.encode(SSTORE2.read(_traitDataPointers[i][thisTraitIndex])),
                            "),url("
                        )
                    );
                }
            }

            thisTraitIndex = HelperLib.parseInt(
                HelperLib._substring(_hash, (NUM_LAYERS * 3) - 3, NUM_LAYERS * 3)
            );
                
            if (_traitDetails[NUM_LAYERS - 1][thisTraitIndex].hidden == false) {
                svgBytes.appendSafe(
                    abi.encodePacked(
                        "data:",
                        _traitDetails[NUM_LAYERS - 1][thisTraitIndex].mimetype,
                        ";base64,",
                        Base64.encode(SSTORE2.read(_traitDataPointers[NUM_LAYERS - 1][thisTraitIndex])),
                        ');background-repeat:no-repeat;background-size:contain;background-position:center;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor;image-rendering:-moz-crisp-edges;image-rendering:pixelated;"></svg>'
                    )
                );
            } else {
                svgBytes.appendSafe(
                    abi.encodePacked(
                        ');background-repeat:no-repeat;background-size:contain;background-position:center;image-rendering:-webkit-optimize-contrast;-ms-interpolation-mode:nearest-neighbor;image-rendering:-moz-crisp-edges;image-rendering:pixelated;"></svg>'
                    )
                );
            }

            return string(
                abi.encodePacked(
                    "data:image/svg+xml;base64,",
                    Base64.encode(svgBytes)
                )
            );
        }

        function hashToMetadata(string memory _hash)
            public
            view
            returns (string memory)
        {
            bytes memory metadataBytes = DynamicBuffer.allocate(1024 * 128);
            metadataBytes.appendSafe("[");

            for (uint i = 0; i < NUM_LAYERS; i++) {
                uint thisTraitIndex = HelperLib.parseInt(
                    HelperLib._substring(_hash, (i * 3), (i * 3) + 3)
                );
                if (_traitDetails[i][thisTraitIndex].hidden == false) {
                    metadataBytes.appendSafe(
                        abi.encodePacked(
                            '{"trait_type":"',
                            LAYER_NAMES[i],
                            '","value":"',
                            _traitDetails[i][thisTraitIndex].name,
                            '"}'
                        )
                    );
                }
                
                if (i == NUM_LAYERS - 1) {
                    metadataBytes.appendSafe("]");
                } else {
                    metadataBytes.appendSafe(",");
                }
            }

            return string(metadataBytes);
        }

        function onAllowList(address addr, bytes32[] calldata merkleProof) public view returns (bool) {
            return MerkleProof.verify(merkleProof, merkleRoot, keccak256(abi.encodePacked(addr)));
        }

        function tokenURI(uint _tokenId)
            public
            view
            override
            returns (string memory)
        {
            require(_exists(_tokenId), "Invalid token");
            require(_traitDataPointers[0].length > 0,  "Traits have not been added");

            string memory tokenHash = tokenIdToHash(_tokenId);

            bytes memory jsonBytes = DynamicBuffer.allocate(1024 * 128);
            jsonBytes.appendSafe(unicode"{\"name\":\"Example & Fren ” 😃 #");

            jsonBytes.appendSafe(
                abi.encodePacked(
                    _toString(_tokenId),
                    "\",\"description\":\"",
                    contractData.description,
                    "\","
                )
            );

            if (bytes(baseURI).length > 0 && _renderTokenOffChain[_tokenId]) {
                jsonBytes.appendSafe(
                    abi.encodePacked(
                        '"image":"',
                        baseURI,
                        _toString(_tokenId),
                        "?dna=",
                        tokenHash,
                        '&network=rinkeby",'
                    )
                );
            } else {
                string memory svgCode = "";
                if (shouldWrapSVG) {
                    string memory svgString = hashToSVG(tokenHash);
                    svgCode = string(
                        abi.encodePacked(
                            "data:image/svg+xml;base64,",
                            Base64.encode(
                                abi.encodePacked(
                                    '<svg width="100%" height="100%" viewBox="0 0 1200 1200" version="1.2" xmlns="http://www.w3.org/2000/svg"><image width="1200" height="1200" href="',
                                    svgString,
                                    '"></image></svg>'
                                )
                            )
                        )
                    );
                    jsonBytes.appendSafe(
                        abi.encodePacked(
                            '"svg_image_data":"',
                            svgString,
                            '",'
                        )
                    );
                } else {
                    svgCode = hashToSVG(tokenHash);
                }

                jsonBytes.appendSafe(
                    abi.encodePacked(
                        '"image_data":"',
                        svgCode,
                        '",'
                    )
                );
            }

            jsonBytes.appendSafe(
                abi.encodePacked(
                    '"attributes":',
                    hashToMetadata(tokenHash),
                    "}"
                )
            );

            return string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(jsonBytes)
                )
            );
        }

        function contractURI()
            public
            view
            returns (string memory)
        {
            return string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        abi.encodePacked(
                            '{"name":"',
                            contractData.name,
                            '","description":"',
                            contractData.description,
                            '","image":"',
                            contractData.image,
                            '","banner":"',
                            contractData.banner,
                            '","external_link":"',
                            contractData.website,
                            '","seller_fee_basis_points":',
                            _toString(contractData.royalties),
                            ',"fee_recipient":"',
                            contractData.royaltiesRecipient,
                            '"}'
                        )
                    )
                )
            );
        }

        function tokenIdToSVG(uint _tokenId)
            public
            view
            returns (string memory)
        {
            return hashToSVG(tokenIdToHash(_tokenId));
        }

        function traitDetails(uint _layerIndex, uint _traitIndex)
            public
            view
            returns (Trait memory)
        {
            return _traitDetails[_layerIndex][_traitIndex];
        }

        function traitData(uint _layerIndex, uint _traitIndex)
            public
            view
            returns (string memory)
        {
            return string(SSTORE2.read(_traitDataPointers[_layerIndex][_traitIndex]));
        }

        function getLinkedTraits(uint _layerIndex, uint _traitIndex)
            public
            view
            returns (uint[] memory)
        {
            return _linkedTraits[_layerIndex][_traitIndex];
        }

        function addLayer(uint _layerIndex, TraitDTO[] memory traits)
            public
            onlyOwner
            whenUnsealed
        {
            require(TIERS[_layerIndex].length == traits.length, "Traits size does not match tiers for this index");
            address[] memory dataPointers = new address[](traits.length);
            for (uint i = 0; i < traits.length; i++) {
                if (traits[i].useExistingData) {
                    dataPointers[i] = dataPointers[traits[i].existingDataIndex];
                } else {
                    dataPointers[i] = SSTORE2.write(traits[i].data);
                }
                _traitDetails[_layerIndex][i] = Trait(traits[i].name, traits[i].mimetype, traits[i].hidden);
            }
            _traitDataPointers[_layerIndex] = dataPointers;
            return;
        }

        function addTrait(uint _layerIndex, uint _traitIndex, TraitDTO memory trait)
            public
            onlyOwner
            whenUnsealed
        {
            _traitDetails[_layerIndex][_traitIndex] = Trait(trait.name, trait.mimetype, trait.hidden);
            address[] memory dataPointers = _traitDataPointers[_layerIndex];
            if (trait.useExistingData) {
                dataPointers[_traitIndex] = dataPointers[trait.existingDataIndex];
            } else {
                dataPointers[_traitIndex] = SSTORE2.write(trait.data);
            }
            _traitDataPointers[_layerIndex] = dataPointers;
            return;
        }

        function setLinkedTraits(LinkedTraitDTO[] memory linkedTraits)
            public
            onlyOwner
            whenUnsealed
        {
            for (uint i = 0; i < linkedTraits.length; i++) {
                _linkedTraits[linkedTraits[i].traitA[0]][linkedTraits[i].traitA[1]] = [linkedTraits[i].traitB[0],linkedTraits[i].traitB[1]];
            }
        }

        function setContractData(ContractData memory _contractData) external onlyOwner whenUnsealed {
            contractData = _contractData;
        }

        function setMaxPerAddress(uint _maxPerAddress) external onlyOwner {
            maxPerAddress = _maxPerAddress;
        }

        function setBaseURI(string memory _baseURI) external onlyOwner {
            baseURI = _baseURI;
        }

        function setBackgroundColor(string memory _backgroundColor) external onlyOwner whenUnsealed {
            backgroundColor = _backgroundColor;
        }

        function setRenderOfTokenId(uint _tokenId, bool _renderOffChain) external {
            require(msg.sender == ownerOf(_tokenId), "Only the token owner can set the render method");
            _renderTokenOffChain[_tokenId] = _renderOffChain;
        }

        function setMerkleRoot(bytes32 newMerkleRoot) external onlyOwner {
            merkleRoot = newMerkleRoot;
        }

        function setMaxPerAllowList(uint _maxPerAllowList) external onlyOwner {
            maxPerAllowList = _maxPerAllowList;
        }

        function setAllowListPrice(uint _allowListPrice) external onlyOwner {
            allowListPrice = _allowListPrice;
        }

        function toggleAllowListMint() external onlyOwner {
            isAllowListActive = !isAllowListActive;
        }

        function toggleWrapSVG() external onlyOwner {
            shouldWrapSVG = !shouldWrapSVG;
        }

        function togglePublicMint() external onlyOwner {
            isPublicMintActive = !isPublicMintActive;
        }

        function sealContract() external whenUnsealed onlyOwner {
            isContractSealed = true;
        }

        function withdraw() external onlyOwner nonReentrant {
            uint balance = address(this).balance;
            uint amount = (balance * (10000 - DEVELOPER_FEE)) / 10000;
            uint distAmount = 0;
            uint totalDistributionPercentage = 0;

            address payable receiver = payable(owner());
            address payable dev = payable(0xEA208Da933C43857683C04BC76e3FD331D7bfdf7);
            Address.sendValue(dev, balance - amount);

            if (withdrawRecipients.length > 0) {
                for (uint i = 0; i < withdrawRecipients.length; i++) {
                    totalDistributionPercentage = totalDistributionPercentage + withdrawRecipients[i].percentage;
                    address payable currRecepient = payable(withdrawRecipients[i].recipientAddress);
                    distAmount = (amount * (10000 - withdrawRecipients[i].percentage)) / 10000;

                    Address.sendValue(currRecepient, amount - distAmount);
                }
            }
            balance = address(this).balance;
            Address.sendValue(receiver, balance);
        }
    }
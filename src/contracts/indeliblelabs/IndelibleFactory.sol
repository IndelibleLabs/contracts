// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./IndelibleGenerative.sol";
import "./IndelibleDrop.sol";

contract IndelibleFactory is AccessControl {
    address private defaultOperatorFilter =
        address(0x3cc6CddA760b79bAfa08dF41ECFA224f810dCeB6);
    address private generativeImplementation;
    address private dropImplementation;

    address private indelibleSigner;
    address private collectorFeeRecipient;
    uint256 private collectorFee;

    event ContractCreated(address creator, address contractAddress);

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function updateDefaultOperatorFilter(
        address newFilter
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        defaultOperatorFilter = newFilter;
    }

    function updateGenerativeImplementation(
        address newImplementation
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        generativeImplementation = newImplementation;
    }

    function updateDropImplementation(
        address newImplementation
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        dropImplementation = newImplementation;
    }

    function updateIndelibleSigner(
        address newIndelibleSigner
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        indelibleSigner = newIndelibleSigner;
    }

    function updateCollectorFeeRecipient(
        address newCollectorFeeRecipient
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        collectorFeeRecipient = newCollectorFeeRecipient;
    }

    function updateCollectorFee(
        uint256 newCollectorFee
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        collectorFee = newCollectorFee;
    }

    function getOperatorFilter() external view returns (address) {
        return defaultOperatorFilter;
    }

    function getGenerativeImplementationAddress()
        external
        view
        returns (address)
    {
        return generativeImplementation;
    }

    function deployGenerativeContract(
        string memory _name,
        string memory _symbol,
        uint _maxSupply,
        BaseSettings calldata _baseSettings,
        RoyaltySettings calldata _royaltySettings,
        WithdrawRecipient[] calldata _withdrawRecipients,
        bool _registerOperatorFilter
    ) external {
        require(
            generativeImplementation != address(0),
            "Implementation not set"
        );

        address payable clone = payable(Clones.clone(generativeImplementation));
        address operatorFilter = _registerOperatorFilter
            ? defaultOperatorFilter
            : address(0);

        IndelibleGenerative(clone).initialize(
            _name,
            _symbol,
            _maxSupply,
            _baseSettings,
            _royaltySettings,
            _withdrawRecipients,
            indelibleSigner,
            collectorFeeRecipient,
            collectorFee,
            msg.sender,
            operatorFilter
        );

        emit ContractCreated(msg.sender, clone);
    }

    function deployDropContract(
        string memory _name,
        string memory _symbol,
        RoyaltySettings calldata _royaltySettings,
        WithdrawRecipient[] calldata _withdrawRecipients,
        bool _registerOperatorFilter
    ) external {
        require(dropImplementation != address(0), "Implementation not set");

        address payable clone = payable(Clones.clone(dropImplementation));
        address operatorFilter = _registerOperatorFilter
            ? defaultOperatorFilter
            : address(0);

        IndelibleDrop(clone).initialize(
            _name,
            _symbol,
            _royaltySettings,
            _withdrawRecipients,
            indelibleSigner,
            collectorFeeRecipient,
            collectorFee,
            msg.sender,
            operatorFilter
        );

        emit ContractCreated(msg.sender, clone);
    }
}

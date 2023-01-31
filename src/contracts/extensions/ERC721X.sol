// SPDX-License-Identifier: MIT
// Indelible Labs LLC

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev This implements an optional extension of {ERC721} that automatically
 * expires approvals for operators to transfer your tokens after 30 days or
 * the set approval lifespan.
 */
abstract contract ERC721X is ERC721, Ownable {
    // Mapping from owner to operator approvals
    mapping(address => mapping(address => uint)) private _operatorApprovals;

    // Approval lifespan
    uint128 public approvalLifespan = 30 days;

    /**
     * @dev Approve `operator` to operate on all of `owner` tokens
     *
     * Emits an {ApprovalForAll} event.
     */
    function _setApprovalForAll(
        address owner,
        address operator,
        bool approved
    ) internal override virtual {
        require(owner != operator, "ERC721: approve to caller");
        _operatorApprovals[owner][operator] = approved ? block.timestamp + approvalLifespan : 0;
        emit ApprovalForAll(owner, operator, approved);
    }

    /**
     * @dev See {IERC721-setApprovalForAll}.
     */
    function setApprovalForAll(address operator, bool approved) public virtual override(ERC721) {
        _setApprovalForAll(_msgSender(), operator, approved);
    }

    /**
     * @dev See {IERC721-isApprovedForAll}.
     */
    function isApprovedForAll(address owner, address operator) public view virtual override(ERC721) returns (bool) {
        return _operatorApprovals[owner][operator] > block.timestamp;
    }
    
    /**
     * @dev Set the lifespan of an approval in days.
     */
    function setApprovalLifespanDays(uint128 lifespanDays) public onlyOwner {
        approvalLifespan = lifespanDays * 1 days;
    }
}

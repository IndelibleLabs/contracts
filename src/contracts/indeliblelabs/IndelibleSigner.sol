// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract IndelibleSecurity is AccessControl {
    address public signerAddress;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    function updateSignerAddress(
        address newSignerAddress
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        signerAddress = newSignerAddress;
    }
}

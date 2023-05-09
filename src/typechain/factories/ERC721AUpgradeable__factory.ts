/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721AUpgradeable,
  ERC721AUpgradeableInterface,
} from "../ERC721AUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "ApprovalCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "ApprovalQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "BalanceQueryForZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintERC2309QuantityExceedsLimit",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "MintZeroQuantity",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerQueryForNonexistentToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnershipNotInitializedForExtraData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferCallerNotOwnerNorApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToNonERC721ReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "URIQueryForNonexistentToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "ConsecutiveTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610eec806100206000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb46514610224578063b88d4fde14610244578063c87b56dd14610257578063e985e9c51461027757600080fd5b80636352211e146101cf57806370a08231146101ef57806395d89b411461020f57600080fd5b8063095ea7b3116100bb578063095ea7b31461017157806318160ddd1461018657806323b872dd146101a957806342842e0e146101bc57600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610b61565b610297565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c6102e9565b60405161010e9190610bce565b34801561014557600080fd5b50610159610154366004610be1565b610384565b6040516001600160a01b03909116815260200161010e565b61018461017f366004610c11565b6103d1565b005b34801561019257600080fd5b5061019b6103e1565b60405190815260200161010e565b6101846101b7366004610c3b565b610400565b6101846101ca366004610c3b565b6105f6565b3480156101db57600080fd5b506101596101ea366004610be1565b610616565b3480156101fb57600080fd5b5061019b61020a366004610c77565b610621565b34801561021b57600080fd5b5061012c61068a565b34801561023057600080fd5b5061018461023f366004610c92565b6106a2565b610184610252366004610ce4565b61071f565b34801561026357600080fd5b5061012c610272366004610be1565b610769565b34801561028357600080fd5b50610102610292366004610dc0565b6107fa565b60006301ffc9a760e01b6001600160e01b0319831614806102c857506380ac58cd60e01b6001600160e01b03198316145b806102e35750635b5e139f60e01b6001600160e01b03198316145b92915050565b60606102f3610837565b600201805461030190610df3565b80601f016020809104026020016040519081016040528092919081815260200182805461032d90610df3565b801561037a5780601f1061034f5761010080835404028352916020019161037a565b820191906000526020600020905b81548152906001019060200180831161035d57829003601f168201915b5050505050905090565b600061038f8261085b565b6103ac576040516333d1c03960e21b815260040160405180910390fd5b6103b4610837565b60009283526006016020525060409020546001600160a01b031690565b6103dd82826001610897565b5050565b6000806103ec610837565b600101546103f8610837565b540303919050565b600061040b8261094c565b9050836001600160a01b0316816001600160a01b03161461043e5760405162a1148160e81b815260040160405180910390fd5b60008061044a846109f1565b9150915061046f818761045a3390565b6001600160a01b039081169116811491141790565b61049a5761047d86336107fa565b61049a57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0385166104c157604051633a954ecd60e21b815260040160405180910390fd5b80156104cc57600082555b6104d4610837565b6001600160a01b0387166000908152600591909101602052604090208054600019019055610500610837565b6001600160a01b03861660008181526005929092016020526040909120805460010190554260a01b17600160e11b17610537610837565b60008681526004919091016020526040812091909155600160e11b841690036105ad5760018401610566610837565b6000828152600491909101602052604081205490036105ab57610587610837565b5481146105ab5783610597610837565b600083815260049190910160205260409020555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b6106118383836040518060200160405280600081525061071f565b505050565b60006102e38261094c565b60006001600160a01b03821661064a576040516323d3ad8160e21b815260040160405180910390fd5b67ffffffffffffffff61065b610837565b6005016000846001600160a01b03166001600160a01b0316815260200190815260200160002054169050919050565b6060610694610837565b600301805461030190610df3565b806106ab610837565b336000818152600792909201602090815260408084206001600160a01b03881680865290835293819020805460ff19169515159590951790945592518415158152919290917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61072a848484610400565b6001600160a01b0383163b156107635761074684848484610a19565b610763576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b60606107748261085b565b61079157604051630a14c4b560e41b815260040160405180910390fd5b60006107a860408051602081019091526000815290565b905080516000036107c857604051806020016040528060008152506107f3565b806107d284610b04565b6040516020016107e3929190610e2d565b6040516020818303038152906040525b9392505050565b6000610804610837565b6001600160a01b039384166000908152600791909101602090815260408083209490951682529290925250205460ff1690565b7f2569078dfb4b0305704d3008e7403993ae9601b85f7ae5e742de3de8f8011c4090565b6000610865610837565b54821080156102e35750600160e01b61087c610837565b60008481526004919091016020526040902054161592915050565b60006108a283610616565b905081156108e157336001600160a01b038216146108e1576108c481336107fa565b6108e1576040516367d9dca160e11b815260040160405180910390fd5b836108ea610837565b6000858152600691909101602052604080822080546001600160a01b0319166001600160a01b0394851617905551859287811692908516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259190a450505050565b6000610956610837565b600083815260049190910160205260408120549150600160e01b821690036109d857806000036109d357610988610837565b5482106109a857604051636f96cda160e11b815260040160405180910390fd5b6109b0610837565b6000199092016000818152600493909301602052604090922054905080156109a8575b919050565b604051636f96cda160e11b815260040160405180910390fd5b60008060006109fe610837565b60009485526006016020525050604090912080549092909150565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610a4e903390899088908890600401610e5c565b6020604051808303816000875af1925050508015610a89575060408051601f3d908101601f19168201909252610a8691810190610e99565b60015b610ae7573d808015610ab7576040519150601f19603f3d011682016040523d82523d6000602084013e610abc565b606091505b508051600003610adf576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a900480610b1e5750819003601f19909101908152919050565b6001600160e01b031981168114610b5e57600080fd5b50565b600060208284031215610b7357600080fd5b81356107f381610b48565b60005b83811015610b99578181015183820152602001610b81565b50506000910152565b60008151808452610bba816020860160208601610b7e565b601f01601f19169290920160200192915050565b6020815260006107f36020830184610ba2565b600060208284031215610bf357600080fd5b5035919050565b80356001600160a01b03811681146109d357600080fd5b60008060408385031215610c2457600080fd5b610c2d83610bfa565b946020939093013593505050565b600080600060608486031215610c5057600080fd5b610c5984610bfa565b9250610c6760208501610bfa565b9150604084013590509250925092565b600060208284031215610c8957600080fd5b6107f382610bfa565b60008060408385031215610ca557600080fd5b610cae83610bfa565b915060208301358015158114610cc357600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610cfa57600080fd5b610d0385610bfa565b9350610d1160208601610bfa565b925060408501359150606085013567ffffffffffffffff80821115610d3557600080fd5b818701915087601f830112610d4957600080fd5b813581811115610d5b57610d5b610cce565b604051601f8201601f19908116603f01168101908382118183101715610d8357610d83610cce565b816040528281528a6020848701011115610d9c57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610dd357600080fd5b610ddc83610bfa565b9150610dea60208401610bfa565b90509250929050565b600181811c90821680610e0757607f821691505b602082108103610e2757634e487b7160e01b600052602260045260246000fd5b50919050565b60008351610e3f818460208801610b7e565b835190830190610e53818360208801610b7e565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610e8f90830184610ba2565b9695505050505050565b600060208284031215610eab57600080fd5b81516107f381610b4856fea2646970667358221220299b94d5218df15b7a8c09d6cbc0dc89c9dfe6b044a89d9784bb8f3a21d521e164736f6c63430008110033";

export class ERC721AUpgradeable__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721AUpgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC721AUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721AUpgradeable {
    return super.attach(address) as ERC721AUpgradeable;
  }
  connect(signer: Signer): ERC721AUpgradeable__factory {
    return super.connect(signer) as ERC721AUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721AUpgradeableInterface {
    return new utils.Interface(_abi) as ERC721AUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721AUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC721AUpgradeable;
  }
}
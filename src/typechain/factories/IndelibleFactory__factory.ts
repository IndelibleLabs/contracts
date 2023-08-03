/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IndelibleFactory,
  IndelibleFactoryInterface,
} from "../IndelibleFactory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "ContractCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "publicMintPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPerAddress",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isPublicMintActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "mintEnd",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isContractSealed",
            type: "bool",
          },
        ],
        internalType: "struct DropSettings",
        name: "_settings",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "royaltyAddress",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "royaltyAmount",
            type: "uint96",
          },
        ],
        internalType: "struct RoyaltySettings",
        name: "_royaltySettings",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipientAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "percentage",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawRecipient[]",
        name: "_withdrawRecipients",
        type: "tuple[]",
      },
      {
        internalType: "bool",
        name: "_registerOperatorFilter",
        type: "bool",
      },
    ],
    name: "deployDrop721Contract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "maxPerAddress",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "publicMintPrice",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isPublicMintActive",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isContractSealed",
            type: "bool",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "placeholderImage",
            type: "string",
          },
        ],
        internalType: "struct Settings",
        name: "_baseSettings",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "royaltyAddress",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "royaltyAmount",
            type: "uint96",
          },
        ],
        internalType: "struct RoyaltySettings",
        name: "_royaltySettings",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipientAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "percentage",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawRecipient[]",
        name: "_withdrawRecipients",
        type: "tuple[]",
      },
      {
        internalType: "bool",
        name: "_registerOperatorFilter",
        type: "bool",
      },
    ],
    name: "deployGenerativeContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getGenerativeImplementationAddress",
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
    inputs: [],
    name: "getOperatorFilter",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
    inputs: [
      {
        internalType: "uint256",
        name: "newCollectorFee",
        type: "uint256",
      },
    ],
    name: "updateCollectorFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newCollectorFeeRecipient",
        type: "address",
      },
    ],
    name: "updateCollectorFeeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newFilter",
        type: "address",
      },
    ],
    name: "updateDefaultOperatorFilter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "updateDrop721Implementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "updateGenerativeImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newIndelibleSecurity",
        type: "address",
      },
    ],
    name: "updateIndelibleSecurity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600180546001600160a01b031916733cc6cdda760b79bafa08df41ecfa224f810dceb617905534801561003657600080fd5b50610042600033610047565b6100f3565b6100518282610055565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610051576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100af3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61138d806101026000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063545ba5d3116100a2578063965ccf1111610071578063965ccf111461023b578063a217fddf1461024c578063c821092214610254578063d547741f14610267578063ee4d2b201461027a57600080fd5b8063545ba5d3146101ef578063741cf8401461020257806386bf06e61461021557806391d148541461022857600080fd5b80632f2ff15d116100de5780632f2ff15d1461019157806336568abe146101a457806342a8da35146101b75780634450b524146101dc57600080fd5b806301ffc9a71461011057806305df25e6146101385780630cd889891461014d578063248a9ca314610160575b600080fd5b61012361011e366004610b3d565b61028d565b60405190151581526020015b60405180910390f35b61014b610146366004610b67565b6102c4565b005b61014b61015b366004610ca9565b6102d5565b61018361016e366004610b67565b60009081526020819052604090206001015490565b60405190815260200161012f565b61014b61019f366004610da0565b610450565b61014b6101b2366004610da0565b61047a565b6001546001600160a01b03165b6040516001600160a01b03909116815260200161012f565b61014b6101ea366004610dcc565b6104f8565b61014b6101fd366004610ea2565b61066b565b61014b610210366004610ea2565b610699565b61014b610223366004610ea2565b6106c7565b610123610236366004610da0565b6106f5565b6002546001600160a01b03166101c4565b610183600081565b61014b610262366004610ea2565b61071e565b61014b610275366004610da0565b61074c565b61014b610288366004610ea2565b610771565b60006001600160e01b03198216637965db0b60e01b14806102be57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006102cf8161079f565b50600655565b6002546001600160a01b031661032b5760405162461bcd60e51b8152602060048201526016602482015275125b5c1b195b595b9d185d1a5bdb881b9bdd081cd95d60521b60448201526064015b60405180910390fd5b600254600090610343906001600160a01b03166107ac565b9050600082610353576000610360565b6001546001600160a01b03165b9050816001600160a01b0316631957bc058b8b8b8b8b8b8b600460009054906101000a90046001600160a01b0316600560009054906101000a90046001600160a01b0316600654338d6040518d63ffffffff1660e01b81526004016103d09c9b9a9998979695949392919061100d565b600060405180830381600087803b1580156103ea57600080fd5b505af11580156103fe573d6000803e3d6000fd5b5050604080513381526001600160a01b03861660208201527f2d49c67975aadd2d389580b368cfff5b49965b0bd5da33c144922ce01e7a4d7b935001905060405180910390a150505050505050505050565b60008281526020819052604090206001015461046b8161079f565b6104758383610846565b505050565b6001600160a01b03811633146104ea5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610322565b6104f482826108ca565b5050565b6003546001600160a01b03166105495760405162461bcd60e51b8152602060048201526016602482015275125b5c1b195b595b9d185d1a5bdb881b9bdd081cd95d60521b6044820152606401610322565b600354600090610561906001600160a01b03166107ac565b905060008261057157600061057e565b6001546001600160a01b03165b9050816001600160a01b031663f9be72fc8a8a8a8a8a8a600460009054906101000a90046001600160a01b0316600560009054906101000a90046001600160a01b0316600654338c6040518c63ffffffff1660e01b81526004016105ec9b9a99989796959493929190611148565b600060405180830381600087803b15801561060657600080fd5b505af115801561061a573d6000803e3d6000fd5b5050604080513381526001600160a01b03861660208201527f2d49c67975aadd2d389580b368cfff5b49965b0bd5da33c144922ce01e7a4d7b935001905060405180910390a1505050505050505050565b60006106768161079f565b50600480546001600160a01b0319166001600160a01b0392909216919091179055565b60006106a48161079f565b50600280546001600160a01b0319166001600160a01b0392909216919091179055565b60006106d28161079f565b50600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60006107298161079f565b50600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000828152602081905260409020600101546107678161079f565b61047583836108ca565b600061077c8161079f565b50600180546001600160a01b0319166001600160a01b0392909216919091179055565b6107a9813361092f565b50565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b0381166108415760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610322565b919050565b61085082826106f5565b6104f4576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556108863390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6108d482826106f5565b156104f4576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b61093982826106f5565b6104f45761094681610988565b61095183602061099a565b604051602001610962929190611262565b60408051601f198184030181529082905262461bcd60e51b8252610322916004016112d7565b60606102be6001600160a01b03831660145b606060006109a9836002611300565b6109b4906002611317565b67ffffffffffffffff8111156109cc576109cc610b80565b6040519080825280601f01601f1916602001820160405280156109f6576020820181803683370190505b509050600360fc1b81600081518110610a1157610a1161132a565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610a4057610a4061132a565b60200101906001600160f81b031916908160001a9053506000610a64846002611300565b610a6f906001611317565b90505b6001811115610ae7576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610aa357610aa361132a565b1a60f81b828281518110610ab957610ab961132a565b60200101906001600160f81b031916908160001a90535060049490941c93610ae081611340565b9050610a72565b508315610b365760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610322565b9392505050565b600060208284031215610b4f57600080fd5b81356001600160e01b031981168114610b3657600080fd5b600060208284031215610b7957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610ba757600080fd5b813567ffffffffffffffff80821115610bc257610bc2610b80565b604051601f8301601f19908116603f01168101908282118183101715610bea57610bea610b80565b81604052838152866020858801011115610c0357600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060c08284031215610c3557600080fd5b50919050565b600060408284031215610c3557600080fd5b60008083601f840112610c5f57600080fd5b50813567ffffffffffffffff811115610c7757600080fd5b6020830191508360208260061b8501011115610c9257600080fd5b9250929050565b8035801515811461084157600080fd5b600080600080600080600080610100898b031215610cc657600080fd5b883567ffffffffffffffff80821115610cde57600080fd5b610cea8c838d01610b96565b995060208b0135915080821115610d0057600080fd5b610d0c8c838d01610b96565b985060408b0135975060608b0135915080821115610d2957600080fd5b610d358c838d01610c23565b9650610d448c60808d01610c3b565b955060c08b0135915080821115610d5a57600080fd5b50610d678b828c01610c4d565b9094509250610d7a905060e08a01610c99565b90509295985092959890939650565b80356001600160a01b038116811461084157600080fd5b60008060408385031215610db357600080fd5b82359150610dc360208401610d89565b90509250929050565b600080600080600080600060e0888a031215610de757600080fd5b873567ffffffffffffffff80821115610dff57600080fd5b610e0b8b838c01610b96565b985060208a0135915080821115610e2157600080fd5b610e2d8b838c01610b96565b975060408a0135915080821115610e4357600080fd5b610e4f8b838c01610c23565b9650610e5e8b60608c01610c3b565b955060a08a0135915080821115610e7457600080fd5b50610e818a828b01610c4d565b9094509250610e94905060c08901610c99565b905092959891949750929550565b600060208284031215610eb457600080fd5b610b3682610d89565b60005b83811015610ed8578181015183820152602001610ec0565b50506000910152565b60008151808452610ef9816020860160208601610ebd565b601f01601f19169290920160200192915050565b6000808335601e19843603018112610f2457600080fd5b830160208101925035905067ffffffffffffffff811115610f4457600080fd5b803603821315610c9257600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b03610f8d82610d89565b16825260208101356bffffffffffffffffffffffff8116808214610fb057600080fd5b80602085015250505050565b8183526000602080850194508260005b85811015611002576001600160a01b03610fe583610d89565b168752818301358388015260409687019690910190600101610fcc565b509495945050505050565b6101808152600061102261018083018f610ee1565b8281036020840152611034818f610ee1565b90508c604084015282810360608401528b35815260208c0135602082015261105e60408d01610c99565b1515604082015261107160608d01610c99565b1515606082015261108560808d018d610f0d565b60c0608084015261109a60c084018284610f53565b9150506110aa60a08e018e610f0d565b83830360a08501526110bd838284610f53565b93505050506110cf608084018c610f7c565b82810360c08401526110e2818a8c610fbc565b9150506110fa60e08301886001600160a01b03169052565b6001600160a01b038616610100830152846101208301526111276101408301856001600160a01b03169052565b6001600160a01b0383166101608301529d9c50505050505050505050505050565b600061016080835261115c8184018f610ee1565b90508281036020840152611170818e610ee1565b905082810360408401528b35815260208c0135602082015261119460408d01610c99565b1515604082015260608c013560608201526111b260808d018d610f0d565b60c060808401526111c760c084018284610f53565b9150506111d660a08e01610c99565b151560a08301526111ea606085018d610f7c565b83810360a08501526111fd818b8d610fbc565b9250505061121660c08301886001600160a01b03169052565b6001600160a01b03861660e0830152846101008301526112426101208301856001600160a01b03169052565b6001600160a01b0383166101408301529c9b505050505050505050505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161129a816017850160208801610ebd565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516112cb816028840160208801610ebd565b01602801949350505050565b602081526000610b366020830184610ee1565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176102be576102be6112ea565b808201808211156102be576102be6112ea565b634e487b7160e01b600052603260045260246000fd5b60008161134f5761134f6112ea565b50600019019056fea26469706673582212206542554a2ecb635427cf4ed6818ec545c92030b70a4ddae93955390095066f2364736f6c63430008110033";

export class IndelibleFactory__factory extends ContractFactory {
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
  ): Promise<IndelibleFactory> {
    return super.deploy(overrides || {}) as Promise<IndelibleFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IndelibleFactory {
    return super.attach(address) as IndelibleFactory;
  }
  connect(signer: Signer): IndelibleFactory__factory {
    return super.connect(signer) as IndelibleFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IndelibleFactoryInterface {
    return new utils.Interface(_abi) as IndelibleFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IndelibleFactory {
    return new Contract(address, _abi, signerOrProvider) as IndelibleFactory;
  }
}

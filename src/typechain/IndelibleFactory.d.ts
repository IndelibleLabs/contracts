/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IndelibleFactoryInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "deployGenerativeContract(string,string,uint256,(uint256,uint256,uint256,uint256,bytes32,bytes32,bool,bool,bool,string,string),(address,uint96),tuple[],bool)": FunctionFragment;
    "getGenerativeImplementationAddress()": FunctionFragment;
    "getOperatorFilter()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateCollectorFee(uint256)": FunctionFragment;
    "updateCollectorFeeRecipient(address)": FunctionFragment;
    "updateDefaultOperatorFilter(address)": FunctionFragment;
    "updateGenerativeImplementation(address)": FunctionFragment;
    "updateIndelibleSigner(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployGenerativeContract",
    values: [
      string,
      string,
      BigNumberish,
      {
        maxPerAddress: BigNumberish;
        publicMintPrice: BigNumberish;
        allowListPrice: BigNumberish;
        maxPerAllowList: BigNumberish;
        merkleRoot: BytesLike;
        tier2MerkleRoot: BytesLike;
        isPublicMintActive: boolean;
        isAllowListActive: boolean;
        isContractSealed: boolean;
        description: string;
        placeholderImage: string;
      },
      { royaltyAddress: string; royaltyAmount: BigNumberish },
      { recipientAddress: string; percentage: BigNumberish }[],
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGenerativeImplementationAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOperatorFilter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCollectorFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCollectorFeeRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDefaultOperatorFilter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateGenerativeImplementation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIndelibleSigner",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployGenerativeContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGenerativeImplementationAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperatorFilter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCollectorFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCollectorFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDefaultOperatorFilter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateGenerativeImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateIndelibleSigner",
    data: BytesLike
  ): Result;

  events: {
    "ContractCreated(address,address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type ContractCreatedEvent = TypedEvent<
  [string, string] & { creator: string; contractAddress: string }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export class IndelibleFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IndelibleFactoryInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    deployGenerativeContract(
      _name: string,
      _symbol: string,
      _maxSupply: BigNumberish,
      _baseSettings: {
        maxPerAddress: BigNumberish;
        publicMintPrice: BigNumberish;
        allowListPrice: BigNumberish;
        maxPerAllowList: BigNumberish;
        merkleRoot: BytesLike;
        tier2MerkleRoot: BytesLike;
        isPublicMintActive: boolean;
        isAllowListActive: boolean;
        isContractSealed: boolean;
        description: string;
        placeholderImage: string;
      },
      _royaltySettings: { royaltyAddress: string; royaltyAmount: BigNumberish },
      _withdrawRecipients: {
        recipientAddress: string;
        percentage: BigNumberish;
      }[],
      _registerOperatorFilter: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGenerativeImplementationAddress(
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOperatorFilter(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateCollectorFee(
      newCollectorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCollectorFeeRecipient(
      newCollectorFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDefaultOperatorFilter(
      newFilter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateGenerativeImplementation(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateIndelibleSigner(
      newIndelibleSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  deployGenerativeContract(
    _name: string,
    _symbol: string,
    _maxSupply: BigNumberish,
    _baseSettings: {
      maxPerAddress: BigNumberish;
      publicMintPrice: BigNumberish;
      allowListPrice: BigNumberish;
      maxPerAllowList: BigNumberish;
      merkleRoot: BytesLike;
      tier2MerkleRoot: BytesLike;
      isPublicMintActive: boolean;
      isAllowListActive: boolean;
      isContractSealed: boolean;
      description: string;
      placeholderImage: string;
    },
    _royaltySettings: { royaltyAddress: string; royaltyAmount: BigNumberish },
    _withdrawRecipients: {
      recipientAddress: string;
      percentage: BigNumberish;
    }[],
    _registerOperatorFilter: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGenerativeImplementationAddress(
    overrides?: CallOverrides
  ): Promise<string>;

  getOperatorFilter(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateCollectorFee(
    newCollectorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCollectorFeeRecipient(
    newCollectorFeeRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDefaultOperatorFilter(
    newFilter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateGenerativeImplementation(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateIndelibleSigner(
    newIndelibleSigner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    deployGenerativeContract(
      _name: string,
      _symbol: string,
      _maxSupply: BigNumberish,
      _baseSettings: {
        maxPerAddress: BigNumberish;
        publicMintPrice: BigNumberish;
        allowListPrice: BigNumberish;
        maxPerAllowList: BigNumberish;
        merkleRoot: BytesLike;
        tier2MerkleRoot: BytesLike;
        isPublicMintActive: boolean;
        isAllowListActive: boolean;
        isContractSealed: boolean;
        description: string;
        placeholderImage: string;
      },
      _royaltySettings: { royaltyAddress: string; royaltyAmount: BigNumberish },
      _withdrawRecipients: {
        recipientAddress: string;
        percentage: BigNumberish;
      }[],
      _registerOperatorFilter: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getGenerativeImplementationAddress(
      overrides?: CallOverrides
    ): Promise<string>;

    getOperatorFilter(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateCollectorFee(
      newCollectorFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCollectorFeeRecipient(
      newCollectorFeeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDefaultOperatorFilter(
      newFilter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateGenerativeImplementation(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateIndelibleSigner(
      newIndelibleSigner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ContractCreated(address,address)"(
      creator?: null,
      contractAddress?: null
    ): TypedEventFilter<
      [string, string],
      { creator: string; contractAddress: string }
    >;

    ContractCreated(
      creator?: null,
      contractAddress?: null
    ): TypedEventFilter<
      [string, string],
      { creator: string; contractAddress: string }
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    deployGenerativeContract(
      _name: string,
      _symbol: string,
      _maxSupply: BigNumberish,
      _baseSettings: {
        maxPerAddress: BigNumberish;
        publicMintPrice: BigNumberish;
        allowListPrice: BigNumberish;
        maxPerAllowList: BigNumberish;
        merkleRoot: BytesLike;
        tier2MerkleRoot: BytesLike;
        isPublicMintActive: boolean;
        isAllowListActive: boolean;
        isContractSealed: boolean;
        description: string;
        placeholderImage: string;
      },
      _royaltySettings: { royaltyAddress: string; royaltyAmount: BigNumberish },
      _withdrawRecipients: {
        recipientAddress: string;
        percentage: BigNumberish;
      }[],
      _registerOperatorFilter: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGenerativeImplementationAddress(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOperatorFilter(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateCollectorFee(
      newCollectorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCollectorFeeRecipient(
      newCollectorFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDefaultOperatorFilter(
      newFilter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateGenerativeImplementation(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateIndelibleSigner(
      newIndelibleSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployGenerativeContract(
      _name: string,
      _symbol: string,
      _maxSupply: BigNumberish,
      _baseSettings: {
        maxPerAddress: BigNumberish;
        publicMintPrice: BigNumberish;
        allowListPrice: BigNumberish;
        maxPerAllowList: BigNumberish;
        merkleRoot: BytesLike;
        tier2MerkleRoot: BytesLike;
        isPublicMintActive: boolean;
        isAllowListActive: boolean;
        isContractSealed: boolean;
        description: string;
        placeholderImage: string;
      },
      _royaltySettings: { royaltyAddress: string; royaltyAmount: BigNumberish },
      _withdrawRecipients: {
        recipientAddress: string;
        percentage: BigNumberish;
      }[],
      _registerOperatorFilter: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGenerativeImplementationAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOperatorFilter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateCollectorFee(
      newCollectorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCollectorFeeRecipient(
      newCollectorFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDefaultOperatorFilter(
      newFilter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateGenerativeImplementation(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateIndelibleSigner(
      newIndelibleSigner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

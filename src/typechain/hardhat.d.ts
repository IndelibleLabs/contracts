/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "DefaultOperatorFilterer721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DefaultOperatorFilterer721__factory>;
    getContractFactory(
      name: "IndelibleGenerative",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IndelibleGenerative__factory>;
    getContractFactory(
      name: "IndelibleOneOfOne",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IndelibleOneOfOne__factory>;
    getContractFactory(
      name: "IOperatorFilterRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOperatorFilterRegistry__factory>;
    getContractFactory(
      name: "IndelibleContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IndelibleContract__factory>;
    getContractFactory(
      name: "TestMinterContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestMinterContract__factory>;
    getContractFactory(
      name: "OperatorFilterer721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OperatorFilterer721__factory>;
    getContractFactory(
      name: "SSTORE2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SSTORE2__factory>;
    getContractFactory(
      name: "Bytecode",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Bytecode__factory>;
    getContractFactory(
      name: "ERC721AIERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AIERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "DefaultOperatorFilterer721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DefaultOperatorFilterer721>;
    getContractAt(
      name: "IndelibleGenerative",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IndelibleGenerative>;
    getContractAt(
      name: "IndelibleOneOfOne",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IndelibleOneOfOne>;
    getContractAt(
      name: "IOperatorFilterRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOperatorFilterRegistry>;
    getContractAt(
      name: "IndelibleContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IndelibleContract>;
    getContractAt(
      name: "TestMinterContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestMinterContract>;
    getContractAt(
      name: "OperatorFilterer721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OperatorFilterer721>;
    getContractAt(
      name: "SSTORE2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SSTORE2>;
    getContractAt(
      name: "Bytecode",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Bytecode>;
    getContractAt(
      name: "ERC721AIERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AIERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

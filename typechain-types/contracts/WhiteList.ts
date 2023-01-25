/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface WhiteListInterface extends utils.Interface {
  functions: {
    "addAddressToWhiteList()": FunctionFragment;
    "maxWhiteListedAddresses()": FunctionFragment;
    "numberOfWhiteListedAddresses()": FunctionFragment;
    "whiteListedAddresses(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAddressToWhiteList"
      | "maxWhiteListedAddresses"
      | "numberOfWhiteListedAddresses"
      | "whiteListedAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAddressToWhiteList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxWhiteListedAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfWhiteListedAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whiteListedAddresses",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAddressToWhiteList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWhiteListedAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfWhiteListedAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whiteListedAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export interface WhiteList extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhiteListInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAddressToWhiteList(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxWhiteListedAddresses(overrides?: CallOverrides): Promise<[number]>;

    numberOfWhiteListedAddresses(overrides?: CallOverrides): Promise<[number]>;

    whiteListedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addAddressToWhiteList(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxWhiteListedAddresses(overrides?: CallOverrides): Promise<number>;

  numberOfWhiteListedAddresses(overrides?: CallOverrides): Promise<number>;

  whiteListedAddresses(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addAddressToWhiteList(overrides?: CallOverrides): Promise<void>;

    maxWhiteListedAddresses(overrides?: CallOverrides): Promise<number>;

    numberOfWhiteListedAddresses(overrides?: CallOverrides): Promise<number>;

    whiteListedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addAddressToWhiteList(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxWhiteListedAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfWhiteListedAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    whiteListedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddressToWhiteList(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxWhiteListedAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfWhiteListedAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whiteListedAddresses(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

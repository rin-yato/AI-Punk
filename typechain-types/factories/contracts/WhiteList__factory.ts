/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { WhiteList, WhiteListInterface } from "../../contracts/WhiteList";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_maxWhiteListedAddresses",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressAlreadyWhiteListed",
    type: "error",
  },
  {
    inputs: [],
    name: "WhiteListFull",
    type: "error",
  },
  {
    inputs: [],
    name: "addAddressToWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxWhiteListedAddresses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfWhiteListedAddresses",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whiteListedAddresses",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516104d23803806104d283398181016040528101906100329190610090565b806000806101000a81548160ff021916908360ff160217905550506100bd565b600080fd5b600060ff82169050919050565b61006d81610057565b811461007857600080fd5b50565b60008151905061008a81610064565b92915050565b6000602082840312156100a6576100a5610052565b5b60006100b48482850161007b565b91505092915050565b610406806100cc6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806303108fe41461005157806313f277441461006f578063d8e773a214610079578063e553921d146100a9575b600080fd5b6100596100c7565b6040516100669190610297565b60405180910390f35b6100776100d8565b005b610093600480360381019061008e9190610315565b610248565b6040516100a0919061035d565b60405180910390f35b6100b1610268565b6040516100be9190610297565b60405180910390f35b60008054906101000a900460ff1681565b60008054906101000a900460ff1660ff16600060019054906101000a900460ff1660ff1603610133576040517fac8908b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156101b7576040517f124eb5f700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600181819054906101000a900460ff168092919061022d906103a7565b91906101000a81548160ff021916908360ff16021790555050565b60016020528060005260406000206000915054906101000a900460ff1681565b600060019054906101000a900460ff1681565b600060ff82169050919050565b6102918161027b565b82525050565b60006020820190506102ac6000830184610288565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006102e2826102b7565b9050919050565b6102f2816102d7565b81146102fd57600080fd5b50565b60008135905061030f816102e9565b92915050565b60006020828403121561032b5761032a6102b2565b5b600061033984828501610300565b91505092915050565b60008115159050919050565b61035781610342565b82525050565b6000602082019050610372600083018461034e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006103b28261027b565b915060ff82036103c5576103c4610378565b5b60018201905091905056fea26469706673582212202f34d58776eb37ca7e9fc6b68b79b7e095756e03486f369402486a2af623d6af64736f6c63430008110033";

type WhiteListConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhiteListConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WhiteList__factory extends ContractFactory {
  constructor(...args: WhiteListConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _maxWhiteListedAddresses: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WhiteList> {
    return super.deploy(
      _maxWhiteListedAddresses,
      overrides || {}
    ) as Promise<WhiteList>;
  }
  override getDeployTransaction(
    _maxWhiteListedAddresses: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _maxWhiteListedAddresses,
      overrides || {}
    );
  }
  override attach(address: string): WhiteList {
    return super.attach(address) as WhiteList;
  }
  override connect(signer: Signer): WhiteList__factory {
    return super.connect(signer) as WhiteList__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhiteListInterface {
    return new utils.Interface(_abi) as WhiteListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhiteList {
    return new Contract(address, _abi, signerOrProvider) as WhiteList;
  }
}

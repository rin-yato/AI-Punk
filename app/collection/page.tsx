'use client';

import React, { useEffect, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import Image from 'next/image';
import Loading from './loading';
import Button from '@/ui/Button';

const ABI = [
  {
    inputs: [{ internalType: 'string', name: 'baseURI', type: 'string' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'approved',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    inputs: [],
    name: '_paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_price',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_address', type: 'address' }],
    name: 'getCollection',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxTokenIds',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mint',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bool', name: 'val', type: 'bool' }],
    name: 'setPaused',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenIds',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
const contractAddress = '0x70c7BDc22f88f8CD054537f65e72Cb32D6260134';

export default function CollectionPage() {
  const [account, setAccount] = useState('');
  const [collection, setCollection] = useState<string[] | null>(null);
  const [wrongNetwork, setWrongNetwork] = useState(false);

  async function connect() {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      window.localStorage.setItem('account', address);
    } catch (err) {
      console.log(err);
    }
  }

  async function getContract() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    return contract;
  }

  async function getCollection() {
    if (window.ethereum.networkVersion !== '5') return [];
    const contract = await getContract();
    const collection = await contract.getCollection(account);
    return getCollectionURI(collection);
  }

  async function getCollectionURI(collection: BigNumber[]) {
    return collection.map((tokenId: BigNumber) =>
      getTokenURI(tokenId.toNumber()),
    );
  }

  function getTokenURI(tokenId: number) {
    return `https://gateway.pinata.cloud/ipfs/QmZbzW22j45KzpUZSZHHwFVRkF2tGD9ExPkCj8gc95KGuH/${tokenId}.png`;
  }

  useEffect(() => {
    const account = window.localStorage.getItem('account');
    if (account) {
      connect();
    }

    window.ethereum.on('accountsChanged', (accounts: any) => {
      if (accounts.length === 0) {
        setAccount('');
        window.localStorage.removeItem('account');
        return;
      }
      setAccount(accounts[0]);
      window.localStorage.setItem('account', accounts[0]);
    });

    // window.ethereum on disconnect
    window.ethereum.on('disconnect', () => {
      setAccount('');
      window.localStorage.removeItem('account');
    });

    window.ethereum.on('chainChanged', (chainId: string) => {
      if (chainId !== '0x5') {
        setWrongNetwork(true);
      } else {
        setWrongNetwork(false);
      }
    });
  }, []);

  useEffect(() => {
    if (account) {
      getCollection().then((collection) => {
        setCollection(collection);
      });
    }
  }, [account]);

  
  if (!account) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <Button className="bg-white text-black" onClick={connect}>
          Connect MetaMask
        </Button>
      </div>
    );
  }
  
  if (collection === null) {
    return <Loading />;
  }

  if (wrongNetwork) {
    return (
      <div className="flex h-full w-full  items-center justify-center">
        <h2 className="text-semibold mb-20 text-xl text-white">
          Please connect to the Goerli network
        </h2>
      </div>
    );
  }

  if (collection.length === 0) {
    <div className="flex h-full w-full items-center justify-center">
      <h2 className="text-semibold mb-20 text-xl text-white">
        You don't have any AI PUNK NFT yet!
      </h2>
    </div>;
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 px-6 md:gap-10 md:px-20 lg:grid-cols-5 xl:grid-cols-6">
      {collection.map((uri, index) => (
        <a
          className="flex w-fit cursor-pointer flex-col items-center justify-center overflow-hidden rounded-md bg-white p-1 md:p-4"
          key={'uri' + index}
          href={uri}
          target="_blank"
        >
          <Image
            src={uri}
            width={200}
            height={200}
            alt="NFT"
            className="rounded-lg"
          />
          <p className="w-full pt-3 pl-2 text-start text-lg font-semibold">
            ID: {uri.split('/')[uri.split('/').length - 1].split('.')[0]}
          </p>
        </a>
      ))}
    </div>
  );
}

import { Web3Provider } from '@ethersproject/providers';
import Link from 'next/link';
import React from 'react';
import Button from './Button';

type Props = {
  connect: Function;
  account: string | null;
  getCollection: Function;
};

export default function NavBar({ connect, account, getCollection }: Props) {
  return (
    <div className="flex w-full justify-between bg-gradient-to-b from-[#ffffff67] to-transparent px-10 py-7 pb-10">
      <h3 className="rounded-full border border-[#ffffffa2] bg-[#12125175] px-8 py-3 text-4xl font-extrabold text-white backdrop-blur-sm">
        AI PUNK
      </h3>
      <div className="flex gap-10">
        <Button>
          <Link href={'/collection'}>My Collection</Link>
        </Button>
        <Button onClick={() => connect()}>
          {account ? (
            <a
              href={`https://goerli.etherscan.io/address/${account}`}
              target="_blank"
            >
              {`${account.slice(0, 3)}...${account.slice(
                account.length - 3,
                account.length,
              )}`}
            </a>
          ) : (
            'Connect'
          )}
        </Button>
      </div>
    </div>
  );
}

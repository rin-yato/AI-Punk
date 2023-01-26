import Link from 'next/link';
import React from 'react';
import Button from './Button';

type Props = {
  connect: Function;
  account: string | null;
  wrongNetwork: boolean;
};

export default function NavBar({ connect, account, wrongNetwork }: Props) {
  return (
    <div className="mb-10 flex w-full justify-between bg-gradient-to-b from-[#ffffff67] to-transparent px-4 py-7 pb-10 md:mb-0 md:px-10">
      <h3 className="rounded-full border border-[#ffffffa2] bg-[#12125175] px-5 py-2 text-xl font-extrabold text-white backdrop-blur-sm md:px-8 md:py-3 md:text-3xl">
        AI PUNK
      </h3>
      <div className="flex justify-between md:gap-10">
        <Link
          href={'/collection'}
          className={`flex items-center rounded-full bg-black px-5 py-2 text-lg font-bold text-white active:scale-95 md:px-8 md:py-3 md:text-2xl `}
        >
          My Collection
        </Link>
        {account ? (
          <a
            href={`https://goerli.etherscan.io/address/${account}`}
            target="_blank"
            className={`hidden items-center rounded-full bg-black px-5 py-2 text-lg font-bold text-white active:scale-95 md:flex md:px-8 md:py-3 md:text-2xl`}
          >
            {wrongNetwork
              ? 'Wrong Network'
              : `${account.slice(0, 3)}...${account.slice(
                  account.length - 3,
                  account.length,
                )}`}
          </a>
        ) : (
          <Button onClick={() => connect()} className="hidden md:flex">
            'Connect'
          </Button>
        )}
      </div>
    </div>
  );
}

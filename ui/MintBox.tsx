import Image from 'next/image';
import React from 'react';
import Button from './Button';

type Props = {
  mint: Function;
};

export default function MintBox({ mint }: Props) {
  return (
    <div className="w-fit rounded-lg border border-[#ffffff55] bg-[#0000008a] p-14 text-white backdrop-blur">
      <span className="flex w-fit items-center justify-center rounded-full bg-sky-50 px-3 py-1 font-semibold text-black">
        ONLY 0.02{' '}
        <Image src="/ethereum.png" width={25} height={25} alt="ETH Icon" />
      </span>
      <h3 className="relative mt-5 text-4xl font-bold">
        Mint Your AI Punk NFT Now!
      </h3>
      <Button
        onClick={mint}
        className="mt-8 w-full bg-white py-6 !text-4xl font-extrabold text-black"
      >
        MINT
      </Button>
    </div>
  );
}

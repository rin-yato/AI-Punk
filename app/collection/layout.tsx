import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';
import Link from 'next/link';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-x-hidden">
      <div className="m-8 flex items-center gap-5 md:gap-8">
        <Link
          href={'/'}
          className=" flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white active:scale-95 md:h-14 md:w-14"
        >
          <IoMdArrowRoundBack className="text-2xl md:text-4xl" />
        </Link>
        <h3 className=" text-2xl font-semibold text-white underline md:text-3xl">
          My Collection
        </h3>
      </div>
      {children}
    </div>
  );
}

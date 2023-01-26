import React from 'react';

type Props = {
  children: React.ReactNode | string;
  onClick?: Function;
  className?: string;
};

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`rounded-full bg-black px-5 py-2 text-lg font-bold text-white active:scale-95 md:px-8 md:py-3 md:text-2xl ${className}`}
    >
      {children}
    </button>
  );
}

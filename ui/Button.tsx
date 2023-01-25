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
      className={`rounded-full bg-black px-8 py-3 text-2xl font-bold text-white active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

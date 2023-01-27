import { BiLoaderAlt } from '@react-icons/all-files/bi/BiLoaderAlt';
import React from 'react';

export default function () {
  setTimeout(() => {
    document.querySelector('.hidden-loading')?.classList.remove('hidden');
  }, 100);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="animate-spin">
        <BiLoaderAlt className="hidden-loading hidden text-2xl text-white" />
      </div>
    </div>
  );
}

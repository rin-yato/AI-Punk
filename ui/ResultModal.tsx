import { BiLoaderAlt } from '@react-icons/all-files/bi/BiLoaderAlt';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type Props = {
  tx?: any;
  getCollection: Function;
  setMinting: Function;
  setTransaction: Function;
};

const BaseURI =
  'https://gateway.pinata.cloud/ipfs/QmZbzW22j45KzpUZSZHHwFVRkF2tGD9ExPkCj8gc95KGuH/';

export default function ResultModal({
  tx,
  getCollection,
  setMinting,
  setTransaction,
}: Props) {
  const images = [128, 129, 166, 184, 448, 449, 62, 68, 525];
  const [image, setImage] = useState<string | number>(images[0]);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const checkTx = async (interval: NodeJS.Timer) => {
    if ((tx && tx.status) || tx !== null) {
      console.log('here');
      const myCollection = await getCollection();
      const tokenId = myCollection[myCollection.length - 1];
      console.log(myCollection, tokenId);
      const tokenURI = `${BaseURI}${tokenId}.png`;
      clearInterval(interval);
      console.log(tokenURI);
      setResultImage(tokenURI);
    }
  };

  const handleClose = () => {
    setMinting(false);
    setTransaction(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(images[Math.floor(Math.random() * images.length)]);
    }, 150);

    checkTx(interval);

    return () => clearInterval(interval);
  }, [tx]);

  return (
    <div
      className="fixed inset-0 z-40 bg-[#00000070] backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="fixed top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-white p-4">
        <Image
          alt="AI PUNK"
          src={resultImage ? `${resultImage}` : `/${image}.png`}
          width={315}
          height={315}
          onLoad={() => resultImage && setFinished(true)}
          className={`rounded-md ${
            resultImage ? 'animate-pulse border-2 border-green-300' : ''
          }`}
        />
        {finished ? (
          <a
            href={`https://goerli.etherscan.io/tx/${tx.hash}`}
            target="_blank"
            className="mt-4 text-lg font-semibold text-slate-700 underline"
          >
            View Your Transaction on Etherscan
          </a>
        ) : (
          <div className="mt-4 flex items-center gap-6">
            <p className=" text-lg font-semibold text-slate-700">
              Minting your AI Punk...
            </p>
            <BiLoaderAlt className="animate-spin text-4xl" />
          </div>
        )}
      </div>
    </div>
  );
}

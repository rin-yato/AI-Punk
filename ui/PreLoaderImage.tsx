
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Transition } from '@/lib/Transition';

type Props = {
  src: string;
  imageClass?: string;
  className?: string;
  top?: string;
  left?: string;
};

export default function ({
  src,
  imageClass,
  className,
  top = '0',
  left = '0',
}: Props) {
  const variant = {
    initial: {
      y: '100vh',
      opacity: 0,
      x: left,
    },
    animate: {
      y: top,
      opacity: 1,
      x: left,
    },
    exit: {
      y: '-100vh',
      opacity: 0,
      x: left,
    },
  };

  return (
    <motion.div
      className={`absolute ${className}`}
      transition={{ ease: Transition.ease, duration: 0.7 }}
      variants={variant}
    >
      <Image
        src={src}
        alt="Preloader Image"
        width={350}
        height={350}
        className={imageClass}
      />
    </motion.div>
  );
}

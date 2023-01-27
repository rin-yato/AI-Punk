
import React from 'react';
import PreLoaderImage from './PreLoaderImage';
import { motion } from 'framer-motion';
import { Transition } from '@/lib/Transition';

export default function PreLoader() {
  const variants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        delay: 1.3,
        ease: Transition.ease,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div className="fixed inset-0 z-50">
      <motion.div
        className="relative h-full w-full bg-black"
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <PreLoaderImage
          src="/1.png"
          className="w-[215px] lg:w-[445px]"
          top="27%"
          left="20%"
        />
        <PreLoaderImage
          src="/525.png"
          className="w-[215px] lg:w-[445px]"
          top="70%"
          left="40vw"
        />
        <PreLoaderImage
          src="/129.png"
          className="right-[10%] w-[215px] lg:w-[445px]"
          top="50vh"
        />
        <PreLoaderImage
          src="/166.png"
          className="right-[55%] w-[215px] lg:w-[445px]"
          top="50vh"
        />
        <PreLoaderImage
          src="/448.png"
          className="right-[20%] w-[215px] lg:w-[445px]"
          top="30vh"
        />
      </motion.div>
    </motion.div>
  );
}

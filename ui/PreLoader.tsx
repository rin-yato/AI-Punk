'use client';

import React from 'react';
import PreLoaderImage from './PreLoaderImage';
import { motion } from 'framer-motion';
import { Transition } from '@/lib/Transition';

export default function PreLoader() {
  const variants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
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
        <PreLoaderImage src="/1.png" className="" top="27%" left="20%" />
        <PreLoaderImage src="/1.png" className="" top="70%" left="40vw" />
        <PreLoaderImage src="/1.png" className="right-[10%]" top="50vh" />
        <PreLoaderImage src="/1.png" className="right-[55%]" top="50vh" />
        <PreLoaderImage src="/1.png" className="right-[20%]" top="20%" />
      </motion.div>
    </motion.div>
  );
}

import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Transition } from '@/lib/Transition';
import { Animation } from '@/lib/Animation';

const images = [1, 50, 57, 125, 126, 128, 129, 166, 184, 448, 449, 62, 68, 525];

export default function InfiniteSlide() {
  const variants: Variants = {
    animate: {
      x: '-70%',
      transition: {
        delay: 2,
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 60,
        ease: 'linear',
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <motion.div
        className="m-5 flex w-fit gap-8 md:gap-24 overflow-y-hidden"
        variants={variants}
      >
        {images.map((image) => (
          <motion.div
            className="relative h-[215px] w-[215px] md:!h-[315px] md:!w-[315px]"
            key={image}
            variants={Animation.slideUp}
            transition={{ duration: 1, ease: Transition.ease }}
          >
            <Image
              key={image}
              src={`/${image}.png`}
              alt="Infinite Slide Show Picture"
              className="rounded-lg opacity-80 brightness-75"
              fill={true}
              sizes="100%"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

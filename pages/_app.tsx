import PreLoader from '@/ui/PreLoader';
import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  return (
    <AnimatePresence>
      {isLoading && <PreLoader key={'PreLoader'} />}
      <motion.div>
        <Component {...pageProps}></Component>
      </motion.div>
    </AnimatePresence>
  );
}

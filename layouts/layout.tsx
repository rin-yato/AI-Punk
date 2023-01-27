import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PreLoader from '@/ui/PreLoader';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // loading logic
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2500);

  return (
    <AnimatePresence>
      {isLoading && <PreLoader key={'PreLoader'} />}
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
}

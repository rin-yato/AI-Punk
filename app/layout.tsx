'use client';

import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PreLoader from '@/ui/PreLoader';

export default function RootLayout({
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
    <html>
      <head>
        <title>AI PUNK</title>
      </head>
      <body>
        <AnimatePresence>
          {isLoading && <PreLoader key={'PreLoader'} />}
          <motion.div>{children}</motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}

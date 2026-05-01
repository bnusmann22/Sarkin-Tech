'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { VscHome, VscAccount, VscArchive, VscMail } from 'react-icons/vsc';
import Dock from '@/components/ui/Dock';

const pageOrder: Record<string, number> = {
  '/': 0,
  '/profile': 1,
  '/archive': 2,
  '/contact': 3,
};

const routes = [
  { label: 'Home', href: '/', icon: <VscHome size={18} /> },
  { label: 'About me', href: '/profile', icon: <VscAccount size={18} /> },
  { label: 'My Projects', href: '/archive', icon: <VscArchive size={18} /> },
  { label: 'Contact', href: '/contact', icon: <VscMail size={18} /> },
];

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction * 120,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -120,
  }),
};

export default function GlobalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [direction, setDirection] = useState(0);
  const previousIndex = useRef(pageOrder[pathname] ?? 0);

  const updateDirection = useCallback(() => {
    const currentIndex = pageOrder[pathname] ?? 0;
    const previous = previousIndex.current;
    setDirection(currentIndex >= previous ? 1 : -1);
    previousIndex.current = currentIndex;
  }, [pathname]);

  useEffect(() => {
    updateDirection();
  }, [updateDirection]);

  const dockItems = useMemo(
    () =>
      routes.map(route => ({
        icon: route.icon,
        label: route.label,
        onClick: () => router.push(route.href),
      })),
    [router]
  );

  return (
    <div className="relative min-h-screen">
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none">
        <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 pointer-events-auto">
          <Dock items={dockItems} className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

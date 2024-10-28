"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    const hideTimer = setInterval(() => {
      if (Date.now() - lastInteraction > 3000 && !hovered) {
        setVisible(false);
      }
    }, 1000);

    return () => clearInterval(hideTimer);
  }, [lastInteraction, hovered]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    setVisible(true);
    setLastInteraction(Date.now());
  });

  const handleMouseEnter = () => {
    setHovered(true);
    setLastInteraction(Date.now());
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setLastInteraction(Date.now());
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring",
              stiffness: 260,
              damping: 20
            } 
          }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.2 } 
          }}
          className={cn(
            `fixed z-[5000] top-0 inset-x-0 flex items-center justify-center`,
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 p-2"
            style={{
              borderRadius: "2.5rem",
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 17, 25, 0.85)",
            }}
          >
            {navItems.map((navItem, idx) => (
              <Link key={`link-${idx}`} href={navItem.link}>
                <motion.button
                  className="relative overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLastInteraction(Date.now())}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white">
                    {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
                    {navItem.name}
                  </span>
                </motion.button>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
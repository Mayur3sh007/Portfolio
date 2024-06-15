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
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;

    if (visible && !hovered) {
      hideTimer = setTimeout(() => {
        setVisible(false);
      }, 3000); // Change 3000 to the number of milliseconds you want the navbar to be visible
    }

    return () => {
      clearTimeout(hideTimer);
    };
  }, [visible, hovered]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        }
      }
    }
  });

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setVisible(false);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex w-fit md:min-w-[60vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-8 py-4 rounded-full shadow-lg hover:shadow-[0px_0px_20px_5px_rgba(128,0,128,0.7)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 17, 25, 0.85)", // Adjusted background color
            borderRadius: "30px", // Rounded corners
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-white items-center flex space-x-1 text-gray-200 dark:hover:text-purple-300 hover:text-purple-500"
              )}
            >
              <button className="relative inline-flex h-12 w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  {navItem.name}
                </span>
              </button>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

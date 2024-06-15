"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  firstName,
  lastName,
  className,
  wordClassName,
  firstNameClassName,
  lastNameClassName,
  containerClassName,
}: {
  firstName: string;
  lastName: string;
  className?: string;
  wordClassName?: string;
  firstNameClassName?: string;
  lastNameClassName?: string;
  containerClassName?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2.5,
        delay: stagger(0.75),
      }
    );
  }, [scope, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={containerClassName}>
        <motion.span
          className={cn("dark:text-white text-black opacity-0 block", wordClassName, firstNameClassName)}
        >
          {firstName}
        </motion.span>
        <motion.span
          className={cn("dark:text-white text-black opacity-0 block", wordClassName, lastNameClassName)}
        >
          {lastName}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

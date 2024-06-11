"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  firstName,
  lastName,
  className,
  wordClassName,
  containerClassName,
}: {
  firstName: string;
  lastName: string;
  className?: string;
  wordClassName?: string;
  containerClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = `${firstName} ${lastName}`.split(" ");

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
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={containerClassName}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn("dark:text-white text-black opacity-0 block", wordClassName)}
          >
            {word}
          </motion.span>
        ))}
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

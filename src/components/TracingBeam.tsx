"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Force an initial update of the motion value
    scrollYProgress.set(0.001);
    setTimeout(() => scrollYProgress.set(0), 0);
  }, [scrollYProgress]);

  return (
    <div ref={ref} className={`${className} min-h-screen`}>
      <motion.div
        className="fixed left-0 top-0 w-[8px] h-full bg-gradient-to-b from-blue-400 to-blue-600 origin-top shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ scaleY }}
      />
      <div className="w-full">{children}</div>
    </div>
  );
};
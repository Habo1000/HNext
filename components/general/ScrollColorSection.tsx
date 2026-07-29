"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function ScrollColorSection({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["#f6f9fa", "#d4e5eb", "#d4e5eb"],
  );

  return (
    <motion.section
      ref={ref}
      style={{ background }}
      className={`min-h-screen ${className ?? ""} `}
      id={id}
    >
      {children}
    </motion.section>
  );
}

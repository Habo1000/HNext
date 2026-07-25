"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

export default function ScrollColorSection({ children }: PropsWithChildren) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#f6f9fa", "#268d97"],
  );

  return (
    <motion.section ref={ref} style={{ background }} className="min-h-screen">
      {children}
    </motion.section>
  );
}

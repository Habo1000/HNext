"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function StickyOnScroll({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastYPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentYPosition = window.scrollY;
      if (currentYPosition > lastYPosition.current && currentYPosition > 88) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentYPosition > 88);
      lastYPosition.current = currentYPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 ${className ?? ""} ${isScrolled ? "bg-background border-b border-border" : ""}`}
    >
      {children}
    </motion.nav>
  );
}

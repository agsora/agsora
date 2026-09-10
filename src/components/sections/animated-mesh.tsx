"use client";

import { motion } from "framer-motion";

export function AnimatedMesh({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <motion.div
        className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(43,98,246,0.22) 0%, rgba(43,98,246,0) 70%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-10 h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(18,194,233,0.22) 0%, rgba(18,194,233,0) 70%)",
        }}
        animate={{ x: [0, -24, 0], y: [0, 26, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(43,98,246,0.16) 0%, rgba(43,98,246,0) 70%)",
        }}
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

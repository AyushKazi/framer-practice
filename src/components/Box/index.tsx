"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

export default function Box() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  //   const list = {
  //     hidden: { opacity: 0 },
  //     visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  //   };

  //   const item = {
  //     hidden: { opacity: 0 },
  //     visible: { opacity: 1 },
  //   };
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {/* <motion.div
        initial={{ opacity: 0 }} // starting state
        animate={{ opacity: 1 }} // final state
        transition={{ duration: 3 }} // animation timing
      >
        Hello, I'm animated!
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.5 }} // scale up on hover
      >
        Hover over me!
      </motion.div>

      <motion.div
        animate={{ x: [0, 100, 50, 0] }} // moves to 100px, then back to 50px, and returns to 0px
        transition={{ duration: 2 }}
      >
        I move in steps!
      </motion.div>

      <motion.ul initial="hidden" animate="visible" variants={list}>
        {[1, 2, 3].map((itemValue) => (
          <motion.li key={itemValue} variants={item}>
            Item {itemValue}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1, ease: "easeInOut" }} // easing options: easeIn, easeOut, easeInOut, etc.
      >
        Smooth motion!
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }} // moves 100px to the right
        transition={{ type: "spring", stiffness: 100 }} // spring effect
      >
        I move to the right!
      </motion.div> */}
      <div className="text-[10rem]  flex justify-center items-center ">
        Hello
      </div>
    </div>
  );
}

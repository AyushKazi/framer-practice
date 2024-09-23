"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import room from "../../../public/room.jpeg";
import long from "../../../public/long.jpeg";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictuers = [
    {
      src: room,
      scale: scale4,
    },
    {
      src: room,
      scale: scale5,
    },
    {
      src: long,
      scale: scale4,
    },
    {
      src: long,
      scale: scale6,
    },
    {
      src: long,
      scale: scale6,
    },
    {
      src: room,
      scale: scale8,
    },
    {
      src: room,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={style.container}>
      <div className={style.sticky}>
        {pictuers.map((item, index) => {
          return (
            <motion.div
              style={{ scale: item.scale }}
              className={style.el}
              key={index}
            >
              <div className={style.imageContainer}>
                <Image src={item.src} alt="image" fill />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

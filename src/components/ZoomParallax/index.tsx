"use client";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import room from "../../../public/room.jpeg";
import long from "../../../public/long.jpeg";

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className={style.container}>
      <div className={style.sticky}>
        <div className={style.el}>
          <div className={style.imageContainer}>
            <Image src={room} alt="image" fill />
          </div>
        </div>
      </div>
    </div>
  );
}

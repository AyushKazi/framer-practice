"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import ZoomParallax from "@/components/ZoomParallax";
import Box from "@/components/Box";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <div>
        <ZoomParallax />
        <Box />
      </div>
    </>
  );
}

"use client";
import ZoomParallax from "../components/ZoomParallax";
import Box from "../components/Box";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
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

"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import ZoomParallax from "@/components/ZoomParallax";
import Box from "@/components/Box";
import SectionBox from "@/components/layout/Section";

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
        <SectionBox index={1}>
          <div className="border border-white h-[100%]">
            <h1>Section 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lacinia, nisl nec efficitur ultricies, nunc sapien euismod metus,
              ac pharetra nisl nunc nec metus. Nullam nec justo nec nulla
              tincidunt ultricies. Sed nec nulla nec arcu ultricies ultricies.
              Phasellus eget odio in sapien lacinia ultricies. Nullam nec justo
              nec nulla tincidunt ultricies. Sed nec nulla nec arcu ultricies
              ultricies. Phasellus eget odio in sapien lacinia ultricies. Nullam
              nec justo nec nulla tincidunt ultricies. Sed nec nulla nec arcu
              ultricies ultricies. Phasellus eget odio in sapien lacinia
              ultricies.
            </p>
          </div>
        </SectionBox>
        <SectionBox index={2}>
          <div className="border border-white h-[100vh]">
            <h1>Section 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              lacinia, nisl nec efficitur ultricies, nunc sapien euismod metus,
              ac pharetra nisl nunc nec metus. Nullam nec justo nec nulla
              tincidunt ultricies. Sed nec nulla nec arcu ultricies ultricies.
              Phasellus eget odio in sapien lacinia ultricies. Nullam nec justo
              nec nulla tincidunt ultricies. Sed nec nulla nec arcu ultricies
              ultricies. Phasellus eget odio in sapien lacinia ultricies. Nullam
              nec justo nec nulla tincidunt ultricies. Sed nec nulla nec arcu
              ultricies ultricies. Phasellus eget odio in sapien lacinia
              ultricies.
            </p>
          </div>
        </SectionBox>
      </div>
    </>
  );
}

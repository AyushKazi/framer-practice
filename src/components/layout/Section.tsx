import { useInView } from "framer-motion";
import React, { useRef } from "react";

export default function SectionBox({
  children,
  index,
}: Readonly<{
  children: React.ReactNode;
  index: number;
}>) {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const translateDirection =
    index % 2 === 0 ? "translateX(-200px)" : "translateX(200px)";

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : translateDirection,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {children}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IndianRupee } from "lucide-react";

export default function ScrollAnimationOverlay() {
  const { scrollY } = useScroll();
  const [coords, setCoords] = useState({ startX: 0, startY: 0, endX: 0, endY: 0, valid: false });

  useEffect(() => {
    const updateCoords = () => {
      const headerLogo = document.getElementById("header-logo");
      const mobileTarget = document.getElementById("left-mobile-target");

      if (headerLogo && mobileTarget) {
        const headerRect = headerLogo.getBoundingClientRect();
        
        // document-relative positions
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        
        const mobileRect = mobileTarget.getBoundingClientRect();
        const mobileDocY = mobileRect.top + scrollTop;
        const mobileDocX = mobileRect.left + scrollLeft;
        
        const headerDocY = headerRect.top + scrollTop;
        const headerDocX = headerRect.left + scrollLeft;

        setCoords({
          startX: headerDocX + headerRect.width / 2,
          startY: headerDocY + headerRect.height / 2,
          endX: mobileDocX + mobileRect.width / 2,
          endY: mobileDocY + mobileRect.height / 2,
          valid: true,
        });
      }
    };

    // Delay slightly to ensure fonts/images are loaded and layout is stable
    const timer = setTimeout(updateCoords, 500);
    window.addEventListener("resize", updateCoords);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateCoords);
    };
  }, []);

  // Map scroll progress. Adjust 300 to a larger value if you want the animation to take more scrolling.
  // 300 means the coin reaches the phone after scrolling down 300px.
  const SCROLL_DISTANCE = 350;
  
  const x = useTransform(scrollY, [0, SCROLL_DISTANCE], [coords.startX, coords.endX]);
  const y = useTransform(scrollY, [0, SCROLL_DISTANCE], [coords.startY, coords.endY]);
  const scale = useTransform(scrollY, [0, SCROLL_DISTANCE / 2, SCROLL_DISTANCE], [0.5, 1.5, 0.8]);
  const opacity = useTransform(scrollY, [0, 50, SCROLL_DISTANCE - 50, SCROLL_DISTANCE], [0, 1, 1, 0]);
  const rotate = useTransform(scrollY, [0, SCROLL_DISTANCE], [0, 720]);

  // Reveal logo inside phone
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const logoElement = document.getElementById("mobile-logo-reveal");
      if (logoElement) {
        if (latest >= SCROLL_DISTANCE - 50) {
          logoElement.style.opacity = "1";
        } else {
          logoElement.style.opacity = "0";
        }
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (!coords.valid) return null;

  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[100]" style={{ height: "1px" }}>
      <motion.div
        style={{ x, y, scale, opacity, rotate }}
        className="absolute top-0 left-0"
      >
        <div className="relative -left-1/2 -top-1/2 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 rounded-full shadow-[0_4px_20px_rgba(251,191,36,0.6)] border-2 border-yellow-200">
          <IndianRupee className="w-6 h-6 text-yellow-900" strokeWidth={3} />
        </div>
      </motion.div>
    </div>
  );
}

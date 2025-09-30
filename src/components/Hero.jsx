import React, { useState, useEffect } from "react";

export function Hero({ src, mobileSrc, alt = "Hero Image", maxHeight = "600px" }) {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width for image source only
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Always add scroll listener for height effect on all screen sizes
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateHeight = () => {
    const maxHeightNum = parseInt(maxHeight);
    const minHeight = 100;
    const scrollFactor = 0.8;
    return Math.max(minHeight, maxHeightNum - scrollY * scrollFactor);
  };

  return (
    <div
      className="px-4 w-full max-w-full rounded-4xl overflow-hidden relative transition-all duration-100 ease-out"
      style={{
        height: `${calculateHeight()}px`,
        aspectRatio: "16 / 9",
      }}
    >
      <img
        src={isMobile && mobileSrc ? mobileSrc : src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </div>
  );
}

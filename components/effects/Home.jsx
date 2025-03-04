"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";

// Dynamically import libraries (client-side only)
const Typed = dynamic(() => import("typed.js"), { ssr: false });
const GLightbox = dynamic(() => import("glightbox"), { ssr: false });
const Isotope = dynamic(() => import("isotope-layout"), { ssr: false });
const imagesLoaded = dynamic(() => import("imagesloaded"), { ssr: false });

export default function Home() {
  // Prevent SSR mismatch by rendering only on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this component renders only on the client

    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Typed.js (Check if element exists before initializing)
    const selectTyped = document.querySelector(".typed");
    if (selectTyped) {
      import("typed.js").then(({ default: Typed }) => {
        let typedStrings = selectTyped
          .getAttribute("data-typed-items")
          .split(",");
        new Typed(".typed", {
          strings: typedStrings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      });
    }

    // GLightbox
    import("glightbox").then(({ default: GLightbox }) => {
      GLightbox({ selector: ".glightbox" });
    });

    // Isotope & imagesLoaded (Check if elements exist)
    document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
      const container = isotopeItem.querySelector(".isotope-container");
      if (container) {
        import("imagesloaded").then(({ default: imagesLoaded }) => {
          imagesLoaded(container, () => {
            import("isotope-layout").then(({ default: Isotope }) => {
              new Isotope(container, {
                itemSelector: ".isotope-item",
                layoutMode: "masonry",
                filter: "*",
                sortBy: "original-order",
              });
            });
          });
        });
      }
    });
  }, []);

  // Don't render anything on the server to avoid hydration errors
  if (!isClient) return null;

  return null; // No UI, just effects
}

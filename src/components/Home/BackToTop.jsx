import React, { useEffect } from "react";
import { useState } from "react";

export default function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
        <button
          onClick={scrollToTop}
          style={{
            backgroundColor: "#25B6AD",
            border: "1px solid white",
            borderRadius: "10px",
            paddingTop: "8px",
            paddingBottom: "8px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 md:w-8 md:h-8 xl:w-12 xl:h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

// ScrollToTopArrow.js
import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        // Adjust this value to your preference
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        // <button
        //   onClick={scrollToTop}
        //   className="fixed p-2 text-white bg-gray-800 rounded-full bottom-10 right-10"
        // >
        //   Scroll to Top
        // </button>
        <div className="fixed p-2 border border-black rounded-full animate-bounce hover:animate-none cursor-pointer bg-[#ffffff] bottom-10 right-10">
          <GoArrowUp onClick={scrollToTop} className="w-5 h-5 " />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;

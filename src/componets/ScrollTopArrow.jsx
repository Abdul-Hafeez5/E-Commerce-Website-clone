import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
        <div className="fixed p-2 border border-black rounded-full animate-bounce hover:animate-none cursor-pointer bg-[#ffffff] bottom-10 right-14">
          <GoArrowUp onClick={scrollToTop} className="w-5 h-5 " />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopArrow;

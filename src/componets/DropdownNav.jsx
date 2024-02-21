import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";


const DropdownNav = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="relative flex items-center cursor-pointer gap-x-2 hover:text-primary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      <span>
        <RxCaretDown />
      </span>
      {isOpen && (
        <div className="absolute z-10 text-sm text-black bg-white border rounded-md shadow-lg w-36 font-quickSand top-6">
          <ul className="flex flex-col items-center justify-center py-2 gap-y-3">
            {children}
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownNav;

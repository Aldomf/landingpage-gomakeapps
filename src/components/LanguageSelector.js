"use client"

import React, { useState } from "react";
import Image from "next/image";


function LanguageSelector() {

    const [language, setLanguage] = useState("English");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const handleLanguageChange = (newLanguage) => {
      setLanguage(newLanguage);
      setIsDropdownOpen(false);
    };
  
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className="relative">
          <div className="mr-10 flex items-center justify-between w-28 relative">
            <Image
              src="/assets/translate.png"
              width={15}
              height={15}
              alt="logo"
            />
            <p className="text-white">{language}</p>
            <button
              onClick={handleDropdownToggle}
            >
              <Image
                src="/assets/sort-down.png"
                width={8}
                height={2}
                alt="dropdown icon"
              />
            </button>
          </div>

          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white w-40 rounded shadow-md ">
              <li
                className="w-full py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageChange("English")}
              >
                English
              </li>
              <li
                className="w-full py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageChange("French")}
              >
                French
              </li>
              <li
                className="w-full py-2 px-4 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageChange("Spanish")}
              >
                Spanish
              </li>
            </ul>
          )}
        </div>
  )
}

export default LanguageSelector
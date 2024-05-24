"use client";

import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { AiFillCaretDown } from "react-icons/ai";

export default function FooterLang() {
  const [lang, setLang] = useState<string>("English");
  const [isOpen, setIsOpen] = useState(false);

  const subItems = ["English", "Polish", "German"];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-gray-200 hover:text-main text-white uppercase text-2xl align-middle"
      >
        <div className="p-2">
          <ReactCountryFlag countryCode="US" svg />
        </div>
        <div className="p-1">{lang}</div>

        <AiFillCaretDown size={10} className="ml-1 m-3 bg-main" />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 bg-navbg text-white rounded mt-1 shadow-lg bg-secondary text-xl  md:w-40 xl:w-64 ">
          {subItems.map((subItem, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 hover:bg-gray-800 uppercase hover:bg-navbg text-left"
            >
              <div className="inline-flex align-middle">
                <div className="p-1">{subItem}</div>
                <ReactCountryFlag countryCode="US" svg />
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

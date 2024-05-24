"use client";

import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { layoutConfig } from "./layoutConfig";

const Nav = () => {
  const navItems = Object.entries(layoutConfig.nav.items).map((item) => {
    return { name: item[0], values: item[1] };
  });

  const NavItem = ({ label }: { label?: string }) => {
    if (!label) return null;

    return (
      <a
        href="#"
        className="block mt-4 lg:mt-0 text-white hover:text-gray-400 uppercase text-center min-w-5 mx-2"
      >
        {label}
      </a>
    );
  };

  const NavCollapseItem = ({
    label,
    subItems,
  }: {
    label: string;
    subItems: string[];
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-200 hover:text-main text-white uppercase"
        >
          {label}
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
                {subItem}
                <img></img>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-navbg pb-4">
      <div className="container mx-auto flex justify-between items-center pt-6 pr-6 pl-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 mb-3">
          <a href="#">
            <img src="/logo.png" alt="Logo" className="h-20" />
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center text-2xl">
            {navItems.map((item) => (
              <>
                {Array.isArray(item.values) ? (
                  <NavCollapseItem
                    label={item.name}
                    subItems={item.values}
                    key={item.name}
                  />
                ) : (
                  <NavItem label={item.name} key={item.name} />
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="h-1 border-t border-main"></div>
    </nav>
  );
};

export default Nav;

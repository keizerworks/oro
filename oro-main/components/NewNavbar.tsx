"use client"
import React, { useState } from 'react';
import RoundLogo from './RoundLogo';

export default function NewNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full font-jost text-white flex justify-between items-center py-5">
      <div className="w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <div className="scale-[60%]">
            <RoundLogo />
          </div>
          <p className="font-bold text-2xl">ORO</p>
        </div>
        <div className="flex md:order-2  md:space-x-3 rtl:space-x-reverse">
        <button className="px-5 sm:px-8 mr-2   font-jost py-2 rounded-full bg-white text-black bg-gradient-to-r from-[#CFAF6C] to-[#F7DA9C] sm:text-lg">
      Get Early Access
    </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 border border-slate-700 rounded-md sm:border-none sm:mr-56
           ${isOpen ? 'block' : 'hidden'}`}
          
        >
          <ul className="flex flex-col text-xl font-extralight p-4 md:p-0  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-jost text-white opacity-90">
            <li>
              <a href="#" className="block py-2 px-2 hover:bg-[#cfb06cbe] hover:text-neutral-200 duration-500 rounded-md">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-2 hover:bg-[#cfb06c9c] hover:text-neutral-200 duration-500 rounded-md">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-2 hover:bg-[#cfb06c9c] hover:text-neutral-200 duration-500 rounded-md">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
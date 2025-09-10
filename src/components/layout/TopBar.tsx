"use client";

import React from "react";
import Image from "next/image";
import { useMobileMenu } from "@/context/MobileMenuContext";

export default function TopBar() {
  const { toggle } = useMobileMenu();
  return (
    <header className="w-full flex items-center justify-between px-4 py-[10px] lg:pt-[10px] lg:pr-[20px] lg:pb-[10px] lg:pl-[15px]">
      {/* Left: menu and logo */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label="Menu"
          className="lg:hidden w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="w-10 h-10 flex items-center justify-center">
          <Image 
            src="/logo-icon.png"
            alt="Orrbit Logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <span className="font-semibold text-[24px] leading-none text-black font-mori">Orrbit</span>
      </div>

      {/* Right: icons */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Star"
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <Image 
            src="/star-icon.svg"
            alt="Star"
            width={40}
            height={40}
          />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <Image 
            src="/notification-icon.png"
            alt="Notifications"
            width={40}
            height={40}
          />
        </button>
      </div>
    </header>
  );
}

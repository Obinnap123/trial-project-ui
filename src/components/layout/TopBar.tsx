// src/components/layout/TopBar.tsx
import React from "react";
import Image from "next/image";

export default function TopBar() {
  return (
    <header className="w-full flex items-center justify-between pt-[10px] pr-[20px] pb-[10px] pl-[15px]">
      {/* Left: logo */}
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] flex items-center justify-center">
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
          className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <Image 
            src="/star-icon.svg"
            alt="Star"
            width={50}
            height={50}
          />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <Image 
            src="/notification-icon.png"
            alt="Notifications"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
}

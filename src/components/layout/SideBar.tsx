"use client";

import Image from 'next/image';
import { useMobileMenu } from "@/context/MobileMenuContext";

export default function SideBar() {
  const { isOpen, close } = useMobileMenu();
  
  const navigationItems = [
    { name: 'Dashboard', icon: '/Category.svg' },
    { name: 'Analytics', icon: '/internet-speed-wifi 1.svg' },
    { name: 'Inbox', icon: '/Message.svg' },
    { name: 'Activity', icon: '/Notification Bing.svg' },
    { name: 'Edit Profile', icon: '/Edit 2.svg' },
    { name: 'Settings', icon: '/Setting 2.svg' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={close}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:relative 
        inset-y-0 left-0 
        w-[232px] h-full 
        border border-gray-200 
        lg:rounded-t-[30px] 
        bg-white 
        overflow-y-auto
        z-50
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button - only visible on mobile when menu is open */}
        <button
          onClick={close}
          className="lg:hidden absolute right-4 top-4 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile Dashboard Title */}
        <div className="lg:hidden pt-14 px-5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 flex items-center justify-center">
              <Image
                src="/Category.svg"
                alt="Dashboard"
                width={16}
                height={16}
              />
            </div>
            <span className="font-semibold text-[15px] text-gray-900">Dashboard</span>
          </div>
        </div>
        
        <nav className="py-[10px] space-y-4 px-5 lg:space-y-0">
          {navigationItems.map((item) => (
            <a
                key={item.name}
                href="#"
                className={`
                  flex items-center gap-3 text-gray-700 hover:bg-gray-50 group py-3
                  ${item.name === 'Dashboard' ? 'lg:flex hidden' : ''}
                  lg:py-0 lg:min-h-[52px] lg:border-b lg:border-gray-200
                `}
                onClick={() => {
                  if (window.innerWidth < 1024) { // Close menu on mobile when item is clicked
                    close();
                  }
                }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={16}
                    height={16}
                  />
                </div>
                <span className="font-medium text-[13px]">{item.name}</span>
              </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

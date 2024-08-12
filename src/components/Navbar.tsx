"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About FIDAS', submenu: ['What is FIDAS', 'Benefits', 'Target Audience'] },
    { name: 'How It Works', link: '/how-it-works' },
    { name: 'Products', submenu: ['FIDAS', 'Associated Software'] },
    { name: 'Services', submenu: ['Implementation', 'Customer Success'] },
    { name: 'Company', submenu: ['About Us', 'Team', 'Partners'] },
    { name: 'Resources', submenu: ['Blog', 'FAQ', 'Downloads'] },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/Ventura-logo.png"
                alt="Logo"
                width={120}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="text-gray-700 hover:text-gray-900 px-4 py-3 rounded-md text-sm font-medium">
                        {item.name}
                      </button>
                      <div className="absolute z-10 hidden group-hover:block bg-white border rounded-md mt-1 w-48 right-0">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem} href={`/${subItem.toLowerCase().replace(/ /g, '-')}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link href={item.link} className="text-gray-700 hover:text-gray-900 px-4 py-3 rounded-md text-sm font-medium">
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => {
                        const submenu = document.getElementById(`submenu-${item.name}`);
                        submenu?.classList.toggle('hidden');
                      }}
                      className="text-gray-700 hover:text-gray-900 block px-4 py-3 rounded-md text-base font-medium w-full text-left"
                    >
                      {item.name}
                    </button>
                    <div id={`submenu-${item.name}`} className="hidden ml-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href={`/${subItem.toLowerCase().replace(/ /g, '-')}`}
                          className="text-gray-500 hover:text-gray-900 block px-4 py-2 rounded-md text-sm font-medium"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className="text-gray-700 hover:text-gray-900 block px-4 py-3 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
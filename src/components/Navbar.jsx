import React, { useRef, useState, useEffect } from "react";

const Navbar = () => {
  const navContainerRef = useRef(null);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex flex-row justify-between size-full items-center p-4 gap-5">
          <div>
            <h1>Ini Nama</h1>
          </div>

          <div className="bg-gray-500 flex flex-auto px-5 h-12 rounded-md items-center text-white justify-between">
            <div className="flex space-x-3">
              <a>item1</a>
              <a>item2</a>
              <a>item3</a>
              <a>item4</a>
            </div>
            <div className="bg-gray-800 h-8 w-8 rounded-sm items-center flex justify-center">
              <h1>A</h1>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

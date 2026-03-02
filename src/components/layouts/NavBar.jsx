// src/components/layouts/NavBar.jsx

import React from "react";
import Input from "../ui/Input";
import NavbarIcons from "../navbar/NavbarIcons";

export default function NavBar({ openSidebar }) {
  return (
    <header className="my-7 bg-white p-3 rounded-xl border border-slate-300">
      {/* Top row: hamburger + search */}
      <div className="flex items-center gap-3">
        {/* Hamburger - sm/md only */}
        <button
          onClick={openSidebar}
          className="lg:hidden text-2xl shrink-0"
          aria-label="Open sidebar"
        >
          ☰
        </button>

        {/* Search takes remaining width */}
        <div className="flex-1 min-w-0">
          <Input />
        </div>
      </div>

      {/* Second row on sm/md, inline on lg */}
      <div className="mt-3 lg:mt-0 lg:flex lg:justify-end">
        <NavbarIcons />
      </div>
    </header>
  );
}

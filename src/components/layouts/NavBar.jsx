// src/components/layouts/NavBar.jsx

import React from "react";
import Input from "../ui/Input";
import NavbarIcons from "../navbar/NavbarIcons";

export default function NavBar() {
  return (
    <div className="my-10 bg-white p-3 rounded-xl border border-slate-300 grid grid-cols-2 items-center">
      <Input />
      <NavbarIcons />
    </div>
  );
}

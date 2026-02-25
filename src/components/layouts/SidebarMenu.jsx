// src/components/layouts/SidebarMenu.jsx

import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarMenu() {
  return (
    <div className="w-64 h-full bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">EduTrack</h2>
      <ul className="space-y-2 flex flex-col">
        <NavLink
          to="/"
          className="p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/studentlist"
          className="p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          Student List
        </NavLink>
        <NavLink
          to="/teacherlist"
          className="p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          Teacher List
        </NavLink>
        <NavLink
          to="/stafflist"
          className="p-2 hover:bg-gray-100 rounded cursor-pointer"
        >
          Staff List
        </NavLink>
        <NavLink className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Classes
        </NavLink>
      </ul>
    </div>
  );
}

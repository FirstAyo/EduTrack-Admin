// src/components/layouts/SidebarMenu.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const navMenus = [
  { name: "Dashboard", url: "/" },
  { name: "Student List", url: "/studentlist" },
  { name: "Add Student", url: "/addstudent" },
  { name: "Teacher List", url: "/teacherlist" },
  { name: "Add Teacher", url: "/addteacher" },
  { name: "Staff List", url: "/stafflist" },
  { name: "Add Staff", url: "/addstaff" },
  { name: "Class", url: "#" },
];

export default function SidebarMenu() {
  return (
    <div className="w-64 h-full bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">EduTrack</h2>
      <ul className="space-y-2 flex flex-col">
        {navMenus.map((menu, idx) => (
          <NavLink
            key={idx}
            to={menu.url}
            className="p-2 hover:bg-gray-100 rounded cursor-pointer"
          >
            {menu.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

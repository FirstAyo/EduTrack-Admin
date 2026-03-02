// src/components/layouts/SidebarMenu.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import gradIcon from "../../assets/icons/graduation.svg";
import dotIcon from "../../assets/icons/dot.svg";

const navMenus = [
  { name: "Dashboard", url: "/", image: gradIcon },
  { name: "Student List", url: "/student-list", image: dotIcon },
  { name: "Add Student", url: "/add-student", image: dotIcon },
  { name: "Teacher List", url: "/teacher-list", image: dotIcon },
  { name: "Add Teacher", url: "/add-teacher", image: dotIcon },
  { name: "Staff List", url: "/staff-list", image: dotIcon },
  { name: "Add Staff", url: "/add-staff", image: dotIcon },
  { name: "All Courses", url: "/course-list", image: dotIcon },
  { name: "Add Courses", url: "/add-course", image: dotIcon },
  { name: "Fees Collection", url: "/fees-collection", image: dotIcon },
  { name: "Add Fees", url: "/add-fees", image: dotIcon },
  { name: "Attendance", url: "/attendance", image: dotIcon },
  { name: "Library", url: "/library", image: dotIcon },
  { name: "Add Library Book", url: "/add-library-book", image: dotIcon },
];

export default function SidebarMenu({ closeSidebar }) {
  return (
    // ✅ lg:sticky keeps sidebar visible while main content scrolls
    // ✅ lg:h-screen ensures full height on desktop
    // ✅ overflow-y-auto keeps scrolling inside sidebar when menu is long
    <aside className="w-64 bg-white shadow-md p-4 overflow-y-auto lg:sticky lg:top-0 h-full">
      {/* Mobile close button */}
      <div className="flex items-center justify-between md:hidden mb-4">
        <h2 className="text-xl font-bold">EduTrack</h2>
        <button onClick={closeSidebar} className="text-xl font-bold">
          ✕
        </button>
      </div>

      {/* Desktop title */}
      <h2 className="text-xl font-bold mb-4 hidden md:block">EduTrack</h2>

      <ul>
        {navMenus.map((menu, idx) => (
          <li key={idx} className="py-1">
            <div className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md">
              <img
                src={menu.image}
                alt={menu.name}
                className="h-6 w-6 object-cover"
              />
              <NavLink
                to={menu.url}
                onClick={closeSidebar}
                className="cursor-pointer"
              >
                {menu.name}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

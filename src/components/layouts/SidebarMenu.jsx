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
  { name: "Class", url: "#", image: dotIcon },
  { name: "Attendance", url: "/attendance", image: dotIcon },
  { name: "Library", url: "/library", image: dotIcon },
  { name: "Add Library Book", url: "/add-library-book", image: dotIcon },
];

export default function SidebarMenu() {
  return (
    <div className="w-64 h-full bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">EduTrack</h2>
      <ul className="">
        {navMenus.map((menu, idx) => (
          <div key={idx} className="py-1">
            <li className="flex items-center gap-2 hover:bg-gray-100 p-2">
              <img
                src={menu.image}
                alt={menu.name}
                className="h-6 w-6 object-cover"
              />
              <NavLink to={menu.url} className="rounded cursor-pointer">
                {menu.name}
              </NavLink>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

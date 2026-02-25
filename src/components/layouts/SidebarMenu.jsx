// src/components/layouts/SidebarMenu.jsx

import React from "react";

export default function SidebarMenu() {
  return (
    <div className="w-64 h-full bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar Menu</h2>
      <ul className="space-y-2">
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Dashboard
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Students
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Teachers
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Classes
        </li>
      </ul>
    </div>
  );
}

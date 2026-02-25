// src/pages/StudentList.jsx

import React from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import Tables from "../components/sections/Tables";
import studentList from "../data/students.json";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Student List", image: dotIcon },
];

export default function StudentList() {
  console.log(studentList[0].profile.name);
  return (
    <div>
      {/* internal nav menu or breadcrumb */}
      <div className="flex justify-between w-full">
        <h1>Student List</h1>

        <div className="flex items-center text-sm text-slate-600">
          {navMenus.map((navMenu, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <img src={navMenu.image} alt="social icon" className="h-5 w-5" />
              <p>{navMenu.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Tables studentLists={studentList} />
    </div>
  );
}

// src/pages/CourseList.jsx

import React from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import Tables from "../components/sections/Tables";
import courseList from "../data/courses.json";
import eyeIcon from "../assets/icons/eye.svg";
import penIcon from "../assets/icons/pen.svg";
import deleteIcon from "../assets/icons/delete.svg";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Course List", image: dotIcon },
];

export default function CourseList() {
  const columns = [
    {
      header: "Course ID",
      render: (row) => <span className="text-slate-500">#{row.courseId}</span>,
    },
    {
      header: "Course Name",
      render: (row) => (
        <span className="text-slate-600 font-medium">{row.courseName}</span>
      ),
    },
    {
      header: "Class Level",
      render: (row) => (
        <span className="text-slate-600 font-medium">{row.classLevel}</span>
      ),
    },
    {
      header: "Subject Area",
      render: (row) => (
        <span className="text-slate-600">{row.subjectArea}</span>
      ),
    },
    {
      header: "Instructor",
      render: (row) => <span className="text-slate-600">{row.instructor}</span>,
    },
    {
      header: "Duration",
      render: (row) => <span className="text-slate-600">{row.duration}</span>,
    },
    {
      header: "Credits",
      render: (row) => <span className="text-slate-600">{row.credits}</span>,
    },
    {
      header: "Class Schedule",
      render: (row) => <span className="text-slate-600">{row.schedule}</span>,
    },
    {
      header: "Room Number",
      render: (row) => (
        <div className="max-w-[200px] text-slate-500 line-clamp-2">
          {row.room}
        </div>
      ),
    },
    {
      header: "Action",
      render: () => (
        <div className="flex gap-4 opacity-70">
          <img src={eyeIcon} className="h-4 w-4 cursor-pointer" alt="view" />
          <img src={penIcon} className="h-4 w-4 cursor-pointer" alt="edit" />
          <img
            src={deleteIcon}
            className="h-4 w-4 cursor-pointer"
            alt="delete"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1>{navMenus[2].name}</h1>

        <div className="flex items-center text-sm text-slate-600">
          {navMenus.map((navMenu, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <img src={navMenu.image} alt="social icon" className="h-5 w-5" />
              <p>{navMenu.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Tables data={courseList} columns={columns} />
    </div>
  );
}

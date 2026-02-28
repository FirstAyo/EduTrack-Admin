// src/pages/StudentList.jsx

import React from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import Tables from "../components/sections/Tables";
import studentList from "../data/students.json";
import eyeIcon from "../assets/icons/eye.svg";
import penIcon from "../assets/icons/pen.svg";
import deleteIcon from "../assets/icons/delete.svg";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Student List", image: dotIcon },
];

export default function StudentList() {
  const columns = [
    {
      header: "Student ID",
      render: (row) => <span className="text-slate-500">#{row.id}</span>,
    },
    {
      header: "Student Name",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.profile.avatar}
            className="h-9 w-9 rounded-full object-cover"
            alt=""
          />
          <span className="font-semibold text-slate-800">
            {row.profile.name}
          </span>
        </div>
      ),
    },
    {
      header: "Email",
      render: (row) => (
        <span className="text-blue-600 font-medium">{row.email}</span>
      ),
    },
    {
      header: "Contact",
      render: (row) => <span className="text-slate-600">{row.contact}</span>,
    },
    {
      header: "Gender",
      render: (row) => <span className="text-slate-600">{row.gender}</span>,
    },
    {
      header: "Class",
      render: (row) => <span className="text-slate-600">{row.class}</span>,
    },
    {
      header: "Section",
      render: (row) => <span className="text-slate-600">{row.section}</span>,
    },
    {
      header: "Age",
      render: (row) => <span className="text-slate-600">{row.age}</span>,
    },
    {
      header: "Address",
      render: (row) => (
        <div className="max-w-[200px] text-slate-500 line-clamp-2">
          {row.address}
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
      <Tables data={studentList} columns={columns} />
    </div>
  );
}

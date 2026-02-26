// src/pages/TeacherList.jsx

import React from "react";
import Tables from "../components/sections/Tables";
import teacherList from "../data/teachers.json";
import eyeIcon from "../assets/icons/eye.svg";
import penIcon from "../assets/icons/pen.svg";
import deleteIcon from "../assets/icons/delete.svg";

export default function TeacherList() {
  const columns = [
    {
      header: "Teacher ID",
      render: (row) => <span className="text-slate-500">#{row.id}</span>,
    },
    {
      header: "Teachers Name",
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
      header: "Subject",
      render: (row) => <span className="text-slate-600">{row.subject}</span>,
    },
    {
      header: "Qualification",
      render: (row) => (
        <span className="text-slate-600">{row.qualification}</span>
      ),
    },
    {
      header: "Experience",
      render: (row) => (
        <span className="text-slate-600">{row.experience} Yrs</span>
      ),
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
      <h1>Teacher List</h1>
      <Tables data={teacherList} columns={columns} />
    </div>
  );
}

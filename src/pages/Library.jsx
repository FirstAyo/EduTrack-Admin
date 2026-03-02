import React from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import Tables from "../components/sections/Tables";
import libraryList from "../data/libraryData.json";
import eyeIcon from "../assets/icons/eye.svg";
import penIcon from "../assets/icons/pen.svg";
import deleteIcon from "../assets/icons/delete.svg";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Fees Collection", image: dotIcon },
];

export default function Library() {
  const columns = [
    {
      header: "Book ID",
      render: (row) => <span className="text-slate-500">#{row.bookId}</span>,
    },
    {
      header: "Book Name",
      render: (row) => (
        <span className="font-semibold text-slate-800">{row.bookName}</span>
      ),
    },
    {
      header: "Author",
      render: (row) => (
        <span className="text-slate-600 font-medium">{row.author}</span>
      ),
    },
    {
      header: "Class",
      render: (row) => <span className="text-slate-600">{row.class}</span>,
    },
    {
      header: "Publication",
      render: (row) => (
        <span className="text-slate-600">{row.publication}</span>
      ),
    },
    {
      header: "Shelf Location",
      render: (row) => (
        <span className="text-slate-600">{row.shelfLocation}</span>
      ),
    },
    {
      header: "Borrower Id",
      render: (row) => <span className="text-slate-600">{row.borrowerId}</span>,
    },
    {
      header: "Description",
      render: (row) => (
        <span className="text-slate-600">{row.description}</span>
      ),
    },
    {
      header: "Status",
      render: (row) => (
        <div
          className={`max-w-[200px] text-slate-500 px-2 py-1 text-center rounded-md ${row.status === "Available" ? "bg-green-200 text-green-600 border border-green-900" : "bg-yellow-200 text-yellow-600 border border-yellow-900"}`}
        >
          {row.status}
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
      <Tables data={libraryList} columns={columns} />
    </div>
  );
}

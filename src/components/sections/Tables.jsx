import React from "react";
import Input from "../ui/Input";

const tableTitles = [
  "Student ID",
  "Student Name",
  "Email",
  "Contact",
  "Gender",
  "Class",
  "Section",
  "Age",
  "Address",
  "Action",
];

export default function Tables() {
  return (
    <>
      {/* the table starts here */}
      <div className="bg-white py-4  my-5 rounded-t-xl border border-slate-300">
        <div className="grid grid-cols-2 items-center px-4">
          <Input />
          <div className="flex justify-end items-center">
            <button className="text-blue-600 font-semibold">
              + Add New Student
            </button>
          </div>
        </div>

        <div className="my-5 ">
          <table className="w-full bg-slate-300 text-sm text-left border-separate border-spacing-y-2 px-4">
            <thead className="bg-gray-100">
              <th className="px-1 py-2">
                <input type="checkbox" />
              </th>
              {tableTitles.map((title, idx) => (
                <th key={idx}>{title}</th>
              ))}
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}

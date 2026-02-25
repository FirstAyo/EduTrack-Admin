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

export default function Tables({ studentLists }) {
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
          <table className="w-full  text-sm text-left border-separate border-spacing-y-2 px-2">
            <thead className="bg-slate-300">
              <tr>
                <th className="px-1 py-2 flex items-center">
                  <input type="checkbox" className="h-5 w-5" />
                </th>
                {tableTitles.map((title, idx) => (
                  <th key={idx}>{title}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {studentLists.map((studentList, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-1 py-4 flex items-center">
                    <input type="checkbox" className="h-5 w-5" />
                  </td>
                  <td>{studentList.id}</td>

                  <td className="flex items-center gap-2 font-semibold">
                    <img
                      src={studentList.profile.avatar}
                      alt="user icon"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <p>{studentList.profile.name}</p>
                  </td>
                  <td className="text-blue-600 font-semibold">
                    {studentList.email}
                  </td>
                  <td>{studentList.contact}</td>
                  <td>{studentList.gender}</td>
                  <td>{studentList.class}</td>
                  <td>{studentList.section}</td>
                  <td>{studentList.age}</td>
                  <td>{studentList.address}</td>
                  {/* <td>Game</td> */}
                </tr>
              ))}
              <tr><button><img src="" alt="" /></button></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

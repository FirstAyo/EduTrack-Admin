import React from "react";
import Input from "../ui/Input";
import deleteIcon from "../../assets/icons/delete.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import penIcon from "../../assets/icons/pen.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";

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

export default function Tables({ studentLists = [] }) {
  const thBase =
    "px-4 py-4 font-semibold whitespace-nowrap align-middle text-slate-700";
  const tdBase = "px-4 py-5 align-middle whitespace-nowrap text-slate-600";

  return (
    <div className="bg-white pt-5 my-5 rounded-xl border border-slate-300">
      {/* top controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 px-4">
        <Input />
        <div className="flex justify-start sm:justify-end items-center">
          <button className="text-blue-600 font-semibold">
            + Add New Student
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="mt-5">
        {/* Prevent table from expanding page width */}
        <div className="w-full min-w-0 overflow-hidden">
          {/* ONLY table scrolls + add left/right gutter like the screenshot */}
          <div className="w-full overflow-x-auto px-4">
            <table className="min-w-7xl w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr className="border-b border-slate-200">
                  <th className={`${thBase} w-12`}>
                    <input type="checkbox" className="h-5 w-5" />
                  </th>

                  {tableTitles.map((title, idx) => (
                    <th key={idx} className={thBase}>
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {studentLists.map((student, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className={`${tdBase} w-12`}>
                      <input type="checkbox" className="h-5 w-5" />
                    </td>

                    <td className={tdBase}>{student.id}</td>

                    <td className="px-4 py-5 align-middle">
                      <div className="flex items-center gap-3">
                        <img
                          src={student.profile?.avatar}
                          alt="user icon"
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <p className="font-semibold text-slate-800 whitespace-nowrap">
                          {student.profile?.name}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-5 align-middle">
                      <span className="text-blue-600 font-medium whitespace-nowrap">
                        {student.email}
                      </span>
                    </td>

                    <td className={tdBase}>{student.contact}</td>
                    <td className={tdBase}>{student.gender}</td>
                    <td className={tdBase}>{student.class}</td>
                    <td className={tdBase}>{student.section}</td>
                    <td className={tdBase}>{student.age}</td>

                    {/* Address can wrap like the screenshot */}
                    <td className="px-4 py-5 align-middle text-slate-500">
                      <div className="max-w-60 leading-5 whitespace-normal">
                        {student.address}
                      </div>
                    </td>

                    {/* Action MUST also have px-4 to match spacing */}
                    <td className="px-4 py-5 align-middle">
                      <div className="flex items-center gap-4">
                        <img
                          src={eyeIcon}
                          alt="view"
                          className="h-4 w-4 cursor-pointer"
                        />
                        <img
                          src={penIcon}
                          alt="edit"
                          className="h-4 w-4 cursor-pointer"
                        />
                        <img
                          src={deleteIcon}
                          alt="delete"
                          className="h-4 w-4 cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* end inner scroll */}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <p className=" text-sm text-gray-500">
            Showing <span>1</span> to <span>10</span> of <span>150</span>{" "}
            entries
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="border p-1 border-slate-400 rounded-sm cursor-pointer hover:bg-blue-700 hover:text-white">
            <img src={arrowLeftIcon} alt="" className="h-6 w-6" />
          </button>

          <div className="flex gap-4">
            {[1, 2, 3].map((num, idx) => (
              <button
                key={idx}
                className="py-1 px-4 border border-slate-400 rounded-sm cursor-pointer hover:bg-blue-700 hover:text-white"
              >
                {num}
              </button>
            ))}
          </div>

          <button className="border p-1 border-slate-400 rounded-sm cursor-pointer hover:bg-blue-700 hover:text-white">
            <img src={arrowRightIcon} alt="" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

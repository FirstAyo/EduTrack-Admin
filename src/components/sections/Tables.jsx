// src/components/sections/Tables.jsx

import React from "react";
import Input from "../ui/Input";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

export default function Tables({ data = [], columns = [] }) {
  return (
    <div className="max-w-full">
      <div className="bg-white py-4 my-5 rounded-t-xl border border-slate-300 w-full overflow-hidden">
        {/* Top Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-3 px-4">
          <Input placeholder="Search..." />
          <div className="flex justify-start sm:justify-end items-center">
            <button className="text-blue-600 font-semibold hover:underline">
              + Add New
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-275 md:min-w-325 lg:min-w-400 text-sm text-left border-collapse">
              <thead className="bg-[#f0f4ff] text-slate-700">
                <tr className="border-b border-slate-200">
                  <th className="w-12 px-4 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </th>
                  {columns.map((col, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-4 font-semibold whitespace-nowrap"
                    >
                      {col.header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {data.map((item, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="hover:bg-slate-50 transition border-b border-slate-400 border-dotted"
                  >
                    <td className="w-12 px-4 py-5">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                    </td>

                    {/* DYNAMIC COLUMNS */}
                    {columns.map((col, colIdx) => (
                      <td key={colIdx} className="px-4 py-5 align-middle">
                        {/* We call the render function defined in the Page file */}
                        {col.render(item)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* bottom of table pagination */}
        <div className="flex items-center justify-between px-6 mt-5 py-2">
          <p>
            Showing <span>1</span> to <span>10</span> of <span>150</span>{" "}
            entries
          </p>

          <div className="flex items-center gap-2">
            <button className="cursor-pointer border py-1 px-2 border-slate-400 rounded-sm">
              <img
                src={arrowLeftIcon}
                alt="arrow left icon"
                className="h-6 w-6"
              />
            </button>
            {[1, 2, 3].map((num, idx) => (
              <button
                key={idx}
                className="cursor-pointer border py-1 px-4 border-slate-400 rounded-sm hover:bg-blue-600 hover:text-white"
              >
                {num}
              </button>
            ))}
            <button className="cursor-pointer border py-1 px-2 border-slate-400 rounded-sm">
              <img
                src={arrowRightIcon}
                alt="arrow right icon"
                className="h-6 w-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

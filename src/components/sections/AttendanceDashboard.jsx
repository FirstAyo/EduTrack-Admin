import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function AttendanceDashboard() {
  const [activeTab, setActiveTab] = useState("Students");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Status icon mapper
  const getIcon = (status) => {
    if (status === "check") return "/icons/green-check.png";
    if (status === "dash") return "/icons/red-dash.png";
    if (status === "x") return "/icons/red-x.png";
    return null;
  };

  const days = Array.from({ length: 30 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="relative w-full max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search employee"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm outline-none text-sm"
          />
        </div>

        <div className="flex gap-6 border-b border-gray-200">
          {["Students", "Teachers", "Staffs"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-500 text-sm font-semibold hover:underline"
          >
            + Add Attendance
          </button>

          <div className="relative group">
            <select className="appearance-none bg-transparent pr-8 pl-2 py-1 text-sm font-semibold text-gray-600 outline-none cursor-pointer">
              <option>All Employee</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Remote</option>
            </select>
            <ChevronDown
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={14}
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1200px]">
          <thead>
            <tr className="bg-slate-50/50 border-b border-gray-100">
              <th className="p-4 text-sm font-bold text-[#344767] sticky left-0 bg-white z-10">
                Employee Name
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="p-4 text-xs font-bold text-[#344767] text-center"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {/* Logic to map through your JSON data based on activeTab goes here */}
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="p-4 flex items-center gap-3 sticky left-0 bg-white z-10 shadow-[4px_0_10px_-4px_rgba(0,0,0,0.05)]">
                <img
                  src="https://i.pravatar.cc/150?u=1"
                  className="w-8 h-8 rounded-full"
                  alt="avatar"
                />
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                  Marcia Baker
                </span>
              </td>
              {days.map((day) => (
                <td key={day} className="p-4 text-center">
                  <img
                    src="/icons/green-check.png"
                    className="w-4 h-4 mx-auto"
                    alt="status"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <AttendanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

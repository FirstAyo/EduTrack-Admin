import React from "react";
import { X, Calendar, ChevronDown } from "lucide-react";

export default function AttendanceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-lg shadow-xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-[#344767] text-xl font-bold">Add Attendance</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[#344767] font-bold text-sm">
              Employee Name
            </label>
            <input
              type="text"
              placeholder="Employee Name"
              className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[#344767] font-bold text-sm">Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="mm/dd/yyyy"
                className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500"
              />
              <Calendar
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#344767] font-bold text-sm">
              Attendance Status
            </label>
            <div className="relative">
              <div className="absolute top-2 left-4 text-[10px] uppercase font-bold text-gray-400">
                Select
              </div>
              <select className="w-full px-4 pt-6 pb-2 rounded-lg border border-gray-200 outline-none appearance-none bg-white">
                <option value="">Select Status</option>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 bg-[#007bff] text-white py-3 rounded-lg font-bold shadow-md hover:bg-blue-600 transition-colors">
              + Add Attendance
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-[#eb5743] text-white py-3 rounded-lg font-bold shadow-md hover:bg-red-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

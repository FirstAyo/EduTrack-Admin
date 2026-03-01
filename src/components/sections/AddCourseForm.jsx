import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * AddCourseForm (Reusable)
 * - Controlled form (values + onChange)
 * - Options passed via props for each select
 * - Tailwind styling to match screenshot
 */
export default function AddCourseForm() {
  return (
    <div className=" font-sans mt-5">
      <div className="max-full mx-auto bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-[#344767] text-lg font-bold mb-8">
          Course Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          {/* Row 1 */}
          <InputGroup label="Course Name" placeholder="Enter course name" />
          <InputGroup label="Last Name" placeholder="Enter class level" />

          {/* Row 2 */}
          <InputGroup label="Course ID" placeholder="Enter ID" />
          <SelectGroup
            label="Subject Area"
            placeholder="Select subject"
            options={[
              "Mathematics",
              "English",
              "Science",
              "Social Studies",
              "Arts",
              "Health Ed",
              "IT",
              "Business",
            ]}
          />

          {/* Row 3 */}
          <InputGroup label="Instructor" placeholder="Enter instructor name" />
          <SelectGroup
            label="Duration"
            placeholder="Select duration"
            options={[
              "1 year",
              "1 semester",
              "2 year",
              "3 year",
              "2 semester",
              "3 semester",
            ]}
          />

          {/* Row 4 */}
          <SelectGroup
            label="Credits"
            placeholder="Select credits"
            options={["1", "2", "3", "4", "5"]}
          />
          <SelectGroup
            label="Class Schedule"
            placeholder="Select credits"
            options={[
              "Mon, Fri - 9 AM",
              "Tue, Thu - 10 AM",
              "Mon, Fri - 11 AM",
              "Tue, Thu - 12 PM",
              "Mon, Wed - 1 PM",
            ]}
          />

          {/* Row 5 - Full Width Room Number */}
          <div className="md:col-span-2">
            <InputGroup label="Room Number" placeholder="Enter room number" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-10">
          <button className="bg-[#007bff] hover:bg-blue-600 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-md">
            + Add Course
          </button>
          <button className="bg-[#eb5743] hover:bg-red-600 text-white px-8 py-2.5 rounded-md text-sm font-bold transition-all shadow-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components for Clean Code ---

const InputGroup = ({ label, placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[#344767] font-bold text-[13px]">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-5 rounded-md border border-gray-200 focus:border-blue-400 focus:ring-0 outline-none transition-all placeholder:text-gray-400 text-gray-600 text-sm"
    />
  </div>
);

const SelectGroup = ({ label, placeholder, options }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[#344767] font-bold text-[13px]">{label}</label>
    <div className="relative">
      {/* The small "Select" overlay from your screenshot */}
      <div className="absolute top-2 left-4 text-[10px] uppercase font-bold text-gray-400 tracking-tight pointer-events-none">
        Select
      </div>
      <select className="w-full px-4 py-5 rounded-md border border-gray-200 focus:border-blue-400 outline-none appearance-none bg-white text-gray-700 text-sm cursor-pointer">
        <option value="" hidden>
          {placeholder}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={16}
      />
    </div>
  </div>
);

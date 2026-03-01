// src/components/sections/DynamicForm.jsx

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// --- Sub-Components ---

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-slate-700 font-semibold text-sm">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400 text-slate-600"
    />
  </div>
);

const SelectField = ({
  label,
  name,
  placeholder,
  options = [],
  value,
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-slate-700 font-semibold text-sm">{label}</label>
    <div className="relative">
      <div className="absolute top-2 left-4 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
        Select
      </div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 pt-6 pb-2 rounded-md border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none bg-white text-slate-600"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        size={18}
      />
    </div>
  </div>
);

export default function DynamicForm({
  title = "Information Form",
  fields = [],
  onSubmit,
  onCancel,
  submitText = "+ Submit",
  cancelText = "Cancel",
}) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-50 my-5">
      <h2 className="text-xl font-bold text-slate-800 mb-8">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {fields.map((field) =>
          field.type === "select" ? (
            <SelectField
              key={field.name}
              {...field}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          ) : (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />
          ),
        )}
      </div>

      <div className="flex gap-4 mt-10">
        <button
          onClick={() => onSubmit(formData)}
          className="bg-[#007bff] hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2"
        >
          {submitText}
        </button>
        <button
          onClick={onCancel}
          className="bg-[#eb5743] hover:bg-red-600 text-white px-10 py-3 rounded-md font-semibold transition-colors"
        >
          {cancelText}
        </button>
      </div>
    </div>
  );
}

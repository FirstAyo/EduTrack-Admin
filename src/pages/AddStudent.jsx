// src/pages/AddStudent.jsx

import React, { useState } from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import DynamicForm from "../components/sections/DynamicForm";
import SingleImageUpload from "../components/sections/SingleImageUpload";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Add Student", image: dotIcon },
];

const teacherFields = [
  { label: "First Name", name: "firstName", placeholder: "Enter first name" },
  { label: "Last Name", name: "lastName", placeholder: "Enter last name" },
  { label: "Student ID", name: "studentId", placeholder: "Enter ID" },
  {
    label: "Email",
    name: "email",
    placeholder: "Enter email address",
    type: "email",
  },
  { label: "Contact", name: "contact", placeholder: "Enter contact number" },
  {
    label: "Gender",
    name: "gender",
    type: "select",
    placeholder: "Select gender",
    options: [
      { label: "Male", value: "m" },
      { label: "Female", value: "f" },
    ],
  },
  {
    label: "Date of Birth",
    name: "dateofbirth",
    type: "date",
    placeholder: "mm/dd/yyyy",
    options: [
      { label: "Mathemathics", value: "math" },
      { label: "English", value: "eng" },
      { label: "Science", value: "sci" },
      { label: "Art & Design", value: "art" },
      { label: "Social Studies", value: "std" },
      { label: "History", value: "hist" },
      { label: "Chemistry", value: "chem" },
      { label: "Biology", value: "bio" },
      { label: "Computer Science", value: "comp" },
      { label: "Physics", value: "phy" },
    ],
  },
  {
    label: "Class",
    name: "class",
    type: "select",
    placeholder: "Select class",
    options: [
      { label: "Class 6", value: "class 7" },
      { label: "Class 7", value: "class 7" },
      { label: "Class 8", value: "class 8" },
      { label: "Class 9", value: "class 9" },
      { label: "Class 10", value: "class 10" },
    ],
  },
  {
    label: "Section",
    name: "section",
    type: "select",
    placeholder: "Select section",
    options: [
      { label: "A", value: "a" },
      { label: "B", value: "b" },
      { label: "C", value: "c" },
    ],
  },
  { label: "Address", name: "address", placeholder: "Enter address" },
];

export default function AddStudent() {
  const [teacherImage, setTeacherImage] = useState();
  return (
    <div>
      <div className="flex justify-between">
        <h1>{navMenus[2].name}</h1>

        <div className="flex items-center text-sm text-slate-600">
          {navMenus.map((navMenu, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <img
                src={navMenu.image}
                alt="social icon"
                className="h-4 w-4 object-cover"
              />
              <p>{navMenu.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <SingleImageUpload
          title="Student Image"
          value={teacherImage}
          onChange={setTeacherImage}
          // optional: initialPreviewUrl="https://...." (if editing an existing teacher)
        />

        <div className="col-span-2">
          <DynamicForm
            title="Student Information"
            fields={teacherFields}
            submitText="+ Add Student"
            onSubmit={(data) => console.log(data)}
            onCancel={() => alert("Cancelled")}
          />
        </div>
      </div>
    </div>
  );
}

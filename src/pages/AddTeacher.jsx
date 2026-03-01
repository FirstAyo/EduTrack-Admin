// src/pages/AddTeacher.jsx

import React, { useState } from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import DynamicForm from "../components/sections/DynamicForm";
import SingleImageUpload from "../components/sections/SingleImageUpload";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Add Teacher", image: dotIcon },
];

const teacherFields = [
  { label: "First Name", name: "firstName", placeholder: "Enter first name" },
  { label: "Last Name", name: "lastName", placeholder: "Enter last name" },
  { label: "Teacher ID", name: "teacherId", placeholder: "Enter ID" },
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
    label: "Subject",
    name: "subject",
    type: "select",
    placeholder: "Select subject",
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
    label: "Qualification",
    name: "qualification",
    type: "select",
    placeholder: "Select qualification",
    options: [
      { label: "M.Sc.,B.Ed.", value: "ma" },
      { label: "M.A.,B.Ed.", value: "mab" },
      { label: "M.Sc.,B.Ed.", value: "masb" },
      { label: "B.P.Ed.", value: "bpd" },
      { label: "M.F.A.,B.Ed.", value: "mfa" },
      { label: "M.C.A.,B.Ed.", value: "mca" },
    ],
  },
  { label: "Experience", name: "experience", placeholder: "Enter experience" },
  { label: "Address", name: "address", placeholder: "Enter address" },
];

export default function AddTeacher() {
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
          title="Teacher Image"
          value={teacherImage}
          onChange={setTeacherImage}
          // optional: initialPreviewUrl="https://...." (if editing an existing teacher)
        />

        <div className="col-span-2">
          <DynamicForm
            title="Teacher Information"
            fields={teacherFields}
            submitText="+ Add Teacher"
            onSubmit={(data) => console.log(data)}
            onCancel={() => alert("Cancelled")}
          />
        </div>
      </div>
    </div>
  );
}

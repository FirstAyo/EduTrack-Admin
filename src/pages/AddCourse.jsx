import React, { useState } from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import AddCourseForm from "../components/sections/AddCourseForm";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Add Course", image: dotIcon },
];

export default function AddCourse() {
  const [values, setValues] = useState({
    courseName: "",
    classLevel: "",
    courseId: "",
    subjectArea: "",
    instructor: "",
    duration: "",
    credits: "",
    classSchedule: "",
    roomNumber: "",
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (formValues) => {
    console.log("Submitting:", formValues);
    // call API / save to state / navigate, etc.
  };

  const handleCancel = () => {
    console.log("Cancelled");
    // navigate back or clear form
  };

  return (
    <div className="my-5">
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

      <AddCourseForm
        title="Course Information"
        values={values}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}

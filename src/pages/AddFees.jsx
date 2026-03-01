import React, { useState } from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import DynamicForm from "../components/sections/DynamicForm";
import SingleImageUpload from "../components/sections/SingleImageUpload";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Add Fees", image: dotIcon },
];

const feesFields = [
  { label: "First Name", name: "firstName", placeholder: "Enter first name" },
  //   { label: "Last Name", name: "lastName", placeholder: "Enter last name" },
  { label: "Student ID", name: "studentId", placeholder: "Enter ID" },
  {
    label: "Fee type",
    name: "feetype",
    placeholder: "Select type",
    type: "select",
    options: [
      { label: "Tuition Fee", value: "tuitionfee" },
      { label: "Sports Fee", value: "sportsfee" },
      { label: "Laboratory Fee", value: "labfee" },
      { label: "Arts Fee", value: "artfee" },
      { label: "Bus Transportation", value: "bustp" },
      { label: "Examination Fee", value: "examfee" },
      { label: "Library Fee", value: "libfee" },
      { label: "Lab Fee", value: "labfee" },
      { label: "Graduation Fee", value: "gradfee" },
      { label: "Health Fee", value: "hltfee" },
    ],
  },
  {
    label: "Class",
    name: "class",
    type: "select",
    placeholder: "Select class",
    options: [
      { label: "6 - 12", value: "class 7" },
      { label: "9 - 12", value: "class 7" },
      { label: "9 - 12", value: "class 7" },
    ],
  },
  { label: "Amount($)", name: "amount", placeholder: "Enter amount" },
  {
    label: "Due Date",
    name: "dateofbirth",
    type: "date",
    placeholder: "mm/dd/yyyy",
  },
  {
    label: "Frequency",
    name: "frequency",
    type: "select",
    placeholder: "Select frequency",
    options: [
      { label: "Annually", value: "annually" },
      { label: "Semester", value: "semester" },
    ],
  },
  {
    label: "Payment Method",
    name: "payment-method",
    type: "select",
    placeholder: "Select payment method",
    options: [
      { label: "Bank Transfer", value: "banktransfer" },
      { label: "Cash, Check", value: "cashcheck" },
      { label: "Credit Card, Cash", value: "creditcard" },
    ],
  },
  { label: "Late Fee", name: "latefee", placeholder: "Enter amount" },
  {
    label: "Status",
    name: "status",
    type: "select",
    placeholder: "Select status",
    options: [
      { label: "Paid", value: "paid" },
      { label: "Pending", value: "pending" },
    ],
  },
];

export default function AddFees() {
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
            title="Fees Information"
            fields={feesFields}
            submitText="+ Add Teacher"
            onSubmit={(data) => console.log(data)}
            onCancel={() => alert("Cancelled")}
          />
        </div>
      </div>
    </div>
  );
}

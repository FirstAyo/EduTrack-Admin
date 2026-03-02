import React from "react";
import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import AddBookForm from "../components/sections/AddBookForm";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Add Library Book", image: dotIcon },
];

export default function AddLibraryBook() {
  const handleSubmit = (book) => {
    // send to API or update state
    console.log("Book saved:", book);
  };
  return (
    <div className="">
      <div className="flex justify-between px-2">
        <h1>{navMenus[2].name}</h1>

        <div className="flex items-center text-sm text-slate-600">
          {navMenus.map((navMenu, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <img src={navMenu.image} alt="social icon" className="h-5 w-5" />
              <p>{navMenu.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-5">
        <AddBookForm
          onSubmit={handleSubmit}
          onCancel={() => console.log("cancel")}
        />
      </div>
    </div>
  );
}

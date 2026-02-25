// src/components/navbar/SelectLanguage.jsx

import React from "react";
import usaFlag from "../../assets/flag-icons/usa.png";
import australiaFlag from "../../assets/flag-icons/australia.png";
import nigeriaFlag from "../../assets/flag-icons/nigeria.svg";
import spainFlag from "../../assets/flag-icons/spain.svg";
import canadaFlag from "../../assets/flag-icons/canada.svg";

const flags = [
  { name: "English", image: usaFlag },
  { name: "Australia", image: australiaFlag },
  { name: "Pidgin", image: nigeriaFlag },
  { name: "Spanish", image: spainFlag },
  { name: "Canadian", image: canadaFlag },
];

export default function SelectLanguage() {
  return (
    <div className="absolute bg-white text-gray-600 font-semibold rounded-md  border border-slate-300 top-26 right-75">
      <h2 className="pl-6 pr-16 py-4">Choose Language</h2>

      <div className="flex flex-col">
        {flags.map((flag, idx) => (
          <div
            key={idx}
            className="flex items-center border-dotted border-t border-slate-400 pl-6 pr-16 py-3 gap-4"
          >
            <img
              src={flag.image}
              alt="flags"
              className="h-8 w-8 rounded-full object-cover"
            />
            <p>{flag.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

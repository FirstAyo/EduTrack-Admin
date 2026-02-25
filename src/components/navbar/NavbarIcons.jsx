// src/components/navbar/NavbarIcons.jsx

import { useState } from "react";
import languageIcon from "../../assets/icons/language.svg";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import bellIcon from "../../assets/icons/bell.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import userIcon from "../../assets/icons/user.svg";
import envelopeIcon from "../../assets/icons/envelope.svg";
import SelectLanguage from "./SelectLanguage";

const icons = [bellIcon, calendarIcon, envelopeIcon];

export default function NavbarIcons() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex gap-3 items-center justify-end">
      {/* select language button */}
      <div>
        <button className="flex py-2 px-2">
          <img src={languageIcon} alt="language icon" className="w-6 h-6" />
          <img src={arrowDownIcon} alt="arrow down icon" className="w-6 h-6" />
        </button>

        <SelectLanguage />
      </div>

      {/* dark and light mode toggle button */}
      <button onClick={toggleTheme}>
        <img
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "sun icon" : "moon icon"}
          className="w-5 h-5"
        />
      </button>

      <div className="flex gap-3 items-center">
        {icons.map((icon, idx) => (
          <button key={idx} className="flex py-2 px-2">
            <img src={icon} alt={`icon ${idx}`} className="w-5 h-5" />
          </button>
        ))}
      </div>

      <button className="flex items-center">
        <img src={userIcon} alt="user icon" className="w-10 h-10" />
        <img src={arrowDownIcon} alt="arrow down icon" className="w-6 h-6" />
      </button>
    </div>
  );
}

import React from "react";
import userIcon from "../../assets/icons/user.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import exclamationIcon from "../../assets/icons/exclamation.svg";
import logoutIcon from "../../assets/icons/logout.svg";

const userProfile = {
  name: "Mateo Luca",
  image: userIcon,
  role: "Admin",
};

const profileMenu = [
  { name: "My Profile", image: userIcon },
  { name: "Settings", image: settingsIcon },
  { name: " Support", image: exclamationIcon },
  { name: "Logout", image: logoutIcon },
];

export default function UseProfile() {
  return (
    <div className="absolute bg-white right-7 w-60 rounded-md border border-slate-300 top-23">
      <div className="flex px-5 py-5 gap-3 items-center">
        <img src={userProfile.image} alt="user icon" className="h-10 w-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <p className="text-md font-semibold text-slate-600">
            {userProfile.name}
          </p>
          <p className="text-sm font-semibold text-slate-800">
            {userProfile.role}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-dotted border-slate-300 py-5">
        {profileMenu.map((menu, idx) => (
          <button
            key={idx}
            className=" flex items-center gap-3 px-5 py-2 cursor-pointer"
          >
            <img src={menu.image} alt="" className="h-5 w-5" />
            <p>{menu.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

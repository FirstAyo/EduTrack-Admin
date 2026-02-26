import React from "react";

export default function Footer() {
  return (
    <footer className="py-5 bg-white rounded-t-xl border border-slate-300 text-sm">
      <p className="flex gap-2 items-center justify-center text-gray-500">
        &copy; <span className="text-gray-800 font-semibold">EduTrack</span>
        <span>
          <p>is Proudly Owned by</p>
        </span>
        <span className="text-blue-600 font-semibold">
          <a href="https://www.craftedtemplate.com/" target="blank">
            Crafted Template
          </a>
        </span>
      </p>
    </footer>
  );
}

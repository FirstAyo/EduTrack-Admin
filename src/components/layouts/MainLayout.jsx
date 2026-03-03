// src/components/layouts/MainLayouts.jsx

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // KEY: lock the whole layout to the viewport height
    <section className="h-screen flex overflow-hidden relative">
      {/* ======================
         DESKTOP SIDEBAR (STICKY)
      ====================== */}
      <div className="hidden lg:block shrink-0 lg:sticky lg:top-0 lg:h-screen">
        <SidebarMenu />
      </div>

      {/* ======================
         MOBILE SIDEBAR (SLIDE)
      ====================== */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarMenu closeSidebar={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      {/* ======================
         MAIN CONTENT (ONLY SCROLL AREA ON DESKTOP)
      ====================== */}
      <div className="flex-1 min-w-0 flex flex-col h-screen overflow-y-auto px-5">
        <NavBar openSidebar={() => setIsSidebarOpen(true)} />

        <main className="flex-1 min-w-0">
          <Outlet />
        </main>

        <Footer />
      </div>
    </section>
  );
}

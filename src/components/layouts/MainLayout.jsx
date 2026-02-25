// src/components/layouts/MainLayouts.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SidebarMenu from "./SidebarMenu";

export default function MainLayout() {
  return (
    <section className="min-h-screen flex overflow-x-hidden">
      <div className="shrink-0">
        <SidebarMenu />
      </div>

      {/* KEY: min-w-0 allows this flex item to shrink instead of pushing page width */}
      <div className="flex-1 min-w-0 mx-5">
        <NavBar />

        {/* optional but helpful: prevents Outlet content from forcing page width */}
        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </section>
  );
}

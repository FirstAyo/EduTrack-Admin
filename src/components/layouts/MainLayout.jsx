import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SidebarMenu from "./SidebarMenu";

export default function MainLayout() {
  return (
    <>
      <section className="min-h-screen flex">
        <div className="">
          <SidebarMenu />
        </div>
        <div className="flex-1 mx-5">
          <NavBar />
          <main className="bg-green-400">
            <Outlet />
          </main>
        </div>
      </section>
    </>
  );
}

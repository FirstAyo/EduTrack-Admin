import { useMemo, useState } from "react";

import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";

import studentsData from "../data/studentsAttendance.json";
import teachersData from "../data/teachersAttendance.json";
import staffsData from "../data/staffsAttendance.json";

import AttendanceTabs from "../components/attendance/AttendanceTabs";
import AttendanceToolbar from "../components/attendance/AttendanceToolbar";
import AttendanceTable from "../components/attendance/AttendanceTable";
import AddAttendanceModal from "../components/attendance/AddAttendanceModal";

const TABS = ["Students", "Teachers", "Staffs"];

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Teacher List", image: dotIcon },
];

export default function Attendance() {
  const [activeTab, setActiveTab] = useState("Students");
  const [search, setSearch] = useState("");
  const [employmentFilter, setEmploymentFilter] = useState("All Employee");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // keep each tab's data separately so updates don't overwrite other tabs
  const [students, setStudents] = useState(studentsData);
  const [teachers, setTeachers] = useState(teachersData);
  const [staffs, setStaffs] = useState(staffsData);

  const { currentData, setCurrentData } = useMemo(() => {
    if (activeTab === "Teachers")
      return { currentData: teachers, setCurrentData: setTeachers };
    if (activeTab === "Staffs")
      return { currentData: staffs, setCurrentData: setStaffs };
    return { currentData: students, setCurrentData: setStudents };
  }, [activeTab, students, teachers, staffs]);

  const filteredData = useMemo(() => {
    const s = search.trim().toLowerCase();

    return currentData.filter((row) => {
      const matchSearch = !s || row.name.toLowerCase().includes(s);

      const matchType =
        employmentFilter === "All Employee" ||
        row.employmentType === employmentFilter;

      return matchSearch && matchType;
    });
  }, [currentData, search, employmentFilter]);

  const handleSaveAttendance = ({ employeeName, dateISO, status }) => {
    // dateISO like "2026-03-01"
    const day = Number(dateISO.split("-")[2]); // 1..31
    const idx = day - 1; // 0-based

    setCurrentData((prev) =>
      prev.map((p) => {
        if (p.name !== employeeName) return p;
        const nextAttendance = [...p.attendance];
        if (idx >= 0 && idx < nextAttendance.length) {
          nextAttendance[idx] = status;
        }
        return { ...p, attendance: nextAttendance };
      }),
    );

    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
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

      <div className="bg-white border border-slate-200 rounded-xl my-5">
        <div className="p-4">
          <AttendanceTabs
            tabs={TABS}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <AttendanceToolbar
            search={search}
            onSearchChange={setSearch}
            employmentFilter={employmentFilter}
            onEmploymentFilterChange={setEmploymentFilter}
            onAddAttendance={() => setIsModalOpen(true)}
          />
        </div>

        <AttendanceTable
          rows={filteredData}
          iconSrc={{
            present: "/images/icons/check-green.png", // replace
            none: "/images/icons/dash-red.png", // replace
            absent: "/images/icons/x-red.png", // replace (optional)
          }}
        />
      </div>

      <AddAttendanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        employees={currentData.map((x) => x.name)}
        onSave={handleSaveAttendance}
      />
    </div>
  );
}

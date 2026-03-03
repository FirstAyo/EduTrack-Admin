// src/pages/Home.jsx

import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

import houseIcon from "../assets/icons/house.svg";
import dotIcon from "../assets/icons/dot.svg";
import userIcon from "../assets/icons/user.svg";
import gradIcon from "../assets/icons/graduation.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import imageIcon from "../assets/icons/image.svg";

import eyeIcon from "../assets/icons/eye.svg";
import penIcon from "../assets/icons/pen.svg";
import deleteIcon from "../assets/icons/delete.svg";

import Tables from "../components/sections/Tables";

import students from "../data/students.json";
import teachers from "../data/teachers.json";
import staffs from "../data/staff.json";
import courses from "../data/courses.json";
import libraryBooks from "../data/libraryData.json";
import fees from "../data/fees-collection.json";
import studentsAttendance from "../data/studentsAttendance.json";
import teachersAttendance from "../data/teachersAttendance.json";
import staffsAttendance from "../data/staffsAttendance.json";

const navMenus = [
  { name: "Dashboard", image: houseIcon },
  { name: "School", image: dotIcon },
  { name: "Overview", image: dotIcon },
];

export default function Home() {
  // Summary cards
  const stats = useMemo(() => {
    const totalFees = Array.isArray(fees)
      ? fees.reduce((sum, f) => sum + (Number(f.amount) || 0), 0)
      : 0;

    return [
      {
        label: "Students",
        value: students?.length ?? 0,
        icon: userIcon,
        tone: "bg-blue-50 border-blue-200",
        link: "/student-list",
      },
      {
        label: "Teachers",
        value: teachers?.length ?? 0,
        icon: gradIcon,
        tone: "bg-emerald-50 border-emerald-200",
        link: "/teacher-list",
      },
      {
        label: "Staff",
        value: staffs?.length ?? 0,
        icon: userIcon,
        tone: "bg-violet-50 border-violet-200",
        link: "/staff-list",
      },
      {
        label: "Courses",
        value: courses?.length ?? 0,
        icon: calendarIcon,
        tone: "bg-amber-50 border-amber-200",
        link: "/course-list",
      },
      {
        label: "Library Books",
        value: libraryBooks?.length ?? 0,
        icon: imageIcon,
        tone: "bg-slate-50 border-slate-200",
        link: "/library",
      },
      {
        label: "Fees Collected",
        value: totalFees,
        icon: calendarIcon,
        tone: "bg-indigo-50 border-indigo-200",
        link: "/fees-collection",
        format: "currency",
      },
    ];
  }, []);

  // Small lists for the dashboard
  const recentStudents = useMemo(() => students.slice(0, 5), []);
  const recentTeachers = useMemo(() => teachers.slice(0, 5), []);
  const recentFees = useMemo(() => fees.slice(0, 5), []);

  // Attendance summary helpers
  const getAttendanceSummary = (records, lastNDays = 7) => {
    // records: [{ attendance: ["present"|"absent"|"none"...] }]
    const sliceDays = (arr) => arr?.slice(0, lastNDays) ?? [];

    let present = 0;
    let absent = 0;
    let none = 0;

    (records ?? []).forEach((r) => {
      sliceDays(r.attendance).forEach((a) => {
        if (a === "present") present += 1;
        else if (a === "absent") absent += 1;
        else none += 1;
      });
    });

    const total = present + absent + none;
    const attended = present + absent;
    const presentRate = attended ? Math.round((present / attended) * 100) : 0;

    return { present, absent, none, total, attended, presentRate };
  };

  const attendance = useMemo(() => {
    const studentsSum = getAttendanceSummary(studentsAttendance, 7);
    const teachersSum = getAttendanceSummary(teachersAttendance, 7);
    const staffSum = getAttendanceSummary(staffsAttendance, 7);

    const overall = {
      present: studentsSum.present + teachersSum.present + staffSum.present,
      absent: studentsSum.absent + teachersSum.absent + staffSum.absent,
      none: studentsSum.none + teachersSum.none + staffSum.none,
    };

    const attended = overall.present + overall.absent;
    const presentRate = attended
      ? Math.round((overall.present / attended) * 100)
      : 0;

    return {
      overall: { ...overall, attended, presentRate },
      students: studentsSum,
      teachers: teachersSum,
      staff: staffSum,
    };
  }, []);

  // Chart-like (no libs) datasets
  const charts = useMemo(() => {
    // Enrollment by Class (from students.json)
    const byClass = new Map();
    (students ?? []).forEach((s) => {
      const key = String(s.class);
      byClass.set(key, (byClass.get(key) ?? 0) + 1);
    });
    const classBars = Array.from(byClass.entries())
      .map(([cls, count]) => ({ label: `Class ${cls}`, value: count }))
      .sort(
        (a, b) =>
          Number(a.label.replace("Class ", "")) -
          Number(b.label.replace("Class ", "")),
      );

    // Fees by Status (from fees-collection.json)
    const byStatus = new Map();
    (fees ?? []).forEach((f) => {
      const key = f.status ?? "Unknown";
      byStatus.set(key, (byStatus.get(key) ?? 0) + 1);
    });
    const statusBars = Array.from(byStatus.entries()).map(([label, value]) => ({
      label,
      value,
    }));

    return { classBars, statusBars };
  }, []);

  // Columns for the reusable table component
  const studentColumns = useMemo(
    () => [
      {
            header: "Student ID",
            render: (row) => <span className="text-slate-500">#{row.id}</span>,
          },
          {
            header: "Student Name",
            render: (row) => (
              <div className="flex items-center gap-3">
                <img
                  src={row.profile.avatar}
                  className="h-9 w-9 rounded-full object-cover"
                  alt=""
                />
                <span className="font-semibold text-slate-800">
                  {row.profile.name}
                </span>
              </div>
            ),
          },
          {
            header: "Email",
            render: (row) => (
              <span className="text-blue-600 font-medium">{row.email}</span>
            ),
          },
          {
            header: "Contact",
            render: (row) => <span className="text-slate-600">{row.contact}</span>,
          },
          {
            header: "Gender",
            render: (row) => <span className="text-slate-600">{row.gender}</span>,
          },
          {
            header: "Class",
            render: (row) => <span className="text-slate-600">{row.class}</span>,
          },
          {
            header: "Section",
            render: (row) => <span className="text-slate-600">{row.section}</span>,
          },
          {
            header: "Age",
            render: (row) => <span className="text-slate-600">{row.age}</span>,
          },
          {
            header: "Address",
            render: (row) => (
              <div className="max-w-[200px] text-slate-500 line-clamp-2">
                {row.address}
              </div>
            ),
          },
          {
            header: "Action",
            render: () => (
              <div className="flex gap-4 opacity-70">
                <img src={eyeIcon} className="h-4 w-4 cursor-pointer" alt="view" />
                <img src={penIcon} className="h-4 w-4 cursor-pointer" alt="edit" />
                <img
                  src={deleteIcon}
                  className="h-4 w-4 cursor-pointer"
                  alt="delete"
                />
              </div>
            ),
          },
    ],
    [],
  );

  const teacherColumns = useMemo(
    () => [
      {
        header: "Teacher ID",
        render: (row) => <span className="text-slate-500">#{row.id}</span>,
      },
      {
        header: "Teachers Name",
        render: (row) => (
          <div className="flex items-center gap-3">
            <img
              src={row.profile.avatar}
              className="h-9 w-9 rounded-full object-cover"
              alt=""
            />
            <span className="font-semibold text-slate-800">
              {row.profile.name}
            </span>
          </div>
        ),
      },
      {
        header: "Email",
        render: (row) => (
          <span className="text-blue-600 font-medium">{row.email}</span>
        ),
      },
      {
        header: "Contact",
        render: (row) => <span className="text-slate-600">{row.contact}</span>,
      },
      {
        header: "Gender",
        render: (row) => <span className="text-slate-600">{row.gender}</span>,
      },
      {
        header: "Subject",
        render: (row) => <span className="text-slate-600">{row.subject}</span>,
      },
      {
        header: "Qualification",
        render: (row) => (
          <span className="text-slate-600">{row.qualification}</span>
        ),
      },
      {
        header: "Experience",
        render: (row) => (
          <span className="text-slate-600">{row.experience} Yrs</span>
        ),
      },
      {
        header: "Address",
        render: (row) => (
          <div className="max-w-[200px] text-slate-500 line-clamp-2">
            {row.address}
          </div>
        ),
      },
      {
        header: "Action",
        render: () => (
          <div className="flex gap-4 opacity-70">
            <img src={eyeIcon} className="h-4 w-4 cursor-pointer" alt="view" />
            <img src={penIcon} className="h-4 w-4 cursor-pointer" alt="edit" />
            <img
              src={deleteIcon}
              className="h-4 w-4 cursor-pointer"
              alt="delete"
            />
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <div className="w-full">
      {/* Title + breadcrumb */}
      <div className="flex justify-between px-2">
        <h1>Dashboard</h1>

        <div className="flex items-center text-sm text-slate-600">
          {navMenus.map((navMenu, idx) => (
            <div key={idx} className="flex items-center gap-1">
              <img src={navMenu.image} alt="" className="h-5 w-5" />
              <p>{navMenu.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance + Recent Fees + Charts */}
      <div className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Attendance summary */}
        <div className="bg-white border border-slate-200 rounded-xl p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-900">
                Attendance Summary
              </h2>
              <p className="text-sm text-slate-500">
                Last 7 days (present vs absent)
              </p>
            </div>
            <NavLink
              to="/attendance"
              className="text-sm text-blue-600 hover:underline"
            >
              View
            </NavLink>
          </div>

          {/* Overall bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Overall present rate</span>
              <span className="font-semibold text-slate-900">
                {attendance.overall.presentRate}%
              </span>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-emerald-500"
                style={{ width: `${attendance.overall.presentRate}%` }}
              />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { label: "Students", v: attendance.students },
                { label: "Teachers", v: attendance.teachers },
                { label: "Staff", v: attendance.staff },
              ].map((g) => (
                <div
                  key={g.label}
                  className="rounded-lg border border-slate-200 p-3"
                >
                  <p className="text-xs text-slate-500">{g.label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {g.v.presentRate}%
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    P: {g.v.present} • A: {g.v.absent}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent fees (mini table) */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 xl:col-span-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-slate-900">Recent Fees</h2>
              <p className="text-sm text-slate-500">Latest fee records</p>
            </div>
            <NavLink
              to="/fees-collection"
              className="text-sm text-blue-600 hover:underline"
            >
              View
            </NavLink>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm text-left border-collapse">
              <thead className="bg-[#f0f4ff] text-slate-700">
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">
                    ID
                  </th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">
                    Student
                  </th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">
                    Type
                  </th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">
                    Amount
                  </th>
                  <th className="px-3 py-3 font-semibold whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentFees.map((f, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition">
                    <td className="px-3 py-3 text-slate-600 whitespace-nowrap">
                      {f.id}
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <img
                          src={f.profile?.avatar}
                          alt=""
                          className="h-7 w-7 rounded-full object-cover shrink-0"
                        />
                        <span className="font-medium text-slate-800 truncate">
                          {f.profile?.studentName}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-600 whitespace-nowrap">
                      {f.feeType}
                    </td>
                    <td className="px-3 py-3 text-slate-900 font-semibold whitespace-nowrap">
                      {new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: f.currency || "USD",
                        maximumFractionDigits: 0,
                      }).format(Number(f.amount) || 0)}
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap border ${
                          f.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {f.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Simple charts (no libs) */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 xl:col-span-1">
          <div>
            <h2 className="font-semibold text-slate-900">Insights</h2>
            <p className="text-sm text-slate-500">
              Simple charts (no extra libraries)
            </p>
          </div>

          {/* Enrollment by class */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-slate-800">
              Enrollment by Class
            </p>
            <div className="mt-3 space-y-2">
              {(() => {
                const max = Math.max(
                  1,
                  ...charts.classBars.map((b) => b.value),
                );
                return charts.classBars.slice(0, 6).map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="w-20 text-xs text-slate-500 whitespace-nowrap">
                      {b.label}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-blue-600"
                        style={{
                          width: `${Math.round((b.value / max) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="w-8 text-xs text-slate-600 text-right">
                      {b.value}
                    </span>
                  </div>
                ));
              })()}
            </div>
          </div>

          {/* Fees by status */}
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-800">
              Fees by Status
            </p>
            <div className="mt-3 space-y-2">
              {(() => {
                const max = Math.max(
                  1,
                  ...charts.statusBars.map((b) => b.value),
                );
                return charts.statusBars.map((b) => (
                  <div key={b.label} className="flex items-center gap-3">
                    <span className="w-20 text-xs text-slate-500 whitespace-nowrap">
                      {b.label}
                    </span>
                    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-indigo-600"
                        style={{
                          width: `${Math.round((b.value / max) * 100)}%`,
                        }}
                      />
                    </div>
                    <span className="w-8 text-xs text-slate-600 text-right">
                      {b.value}
                    </span>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((card) => (
          <NavLink
            key={card.label}
            to={card.link}
            className={`border rounded-xl p-4 bg-white hover:shadow-sm transition ${card.tone}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">{card.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {card.format === "currency"
                    ? new Intl.NumberFormat("en-CA", {
                        style: "currency",
                        currency: "CAD",
                        maximumFractionDigits: 0,
                      }).format(card.value)
                    : card.value}
                </p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-white/70 border border-slate-200 flex items-center justify-center">
                <img src={card.icon} alt="" className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3">Click to view details</p>
          </NavLink>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h2 className="font-semibold text-slate-900">Quick Actions</h2>
            <p className="text-sm text-slate-500">
              Add new records fast without hunting through the menu.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <NavLink
              to="/add-student"
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm"
            >
              + Add Student
            </NavLink>
            <NavLink
              to="/add-teacher"
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm"
            >
              + Add Teacher
            </NavLink>
            <NavLink
              to="/add-staff"
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm"
            >
              + Add Staff
            </NavLink>
            <NavLink
              to="/add-course"
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm"
            >
              + Add Course
            </NavLink>
            <NavLink
              to="/add-fees"
              className="px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm"
            >
              + Add Fees
            </NavLink>
          </div>
        </div>
      </div>

      {/* Recent Students + Recent Teachers */}
      <div className="mt-2 grid grid-cols-1 xl:grid-cols-2 gap-5">
        <Tables
          data={recentStudents}
          columns={studentColumns}
          url="/add-student"
          page="Student"
        />
        <Tables
          data={recentTeachers}
          columns={teacherColumns}
          url="/add-teacher"
          page="Teacher"
        />
      </div>
    </div>
  );
}

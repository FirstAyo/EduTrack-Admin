export default function AttendanceToolbar({
  search,
  onSearchChange,
  employmentFilter,
  onEmploymentFilterChange,
  onAddAttendance,
}) {
  return (
    <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3">
      <div className="w-full md:max-w-sm">
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search employee"
          className="w-full h-11 px-4 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="flex items-center gap-3 md:ml-auto">
        <button
          onClick={onAddAttendance}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          + Add Attendance
        </button>

        <select
          value={employmentFilter}
          onChange={(e) => onEmploymentFilterChange(e.target.value)}
          className="h-11 px-3 rounded-lg border border-slate-200 bg-white text-sm outline-none"
        >
          <option>All Employee</option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Part Time</option>
          <option>Remote</option>
        </select>
      </div>
    </div>
  );
}

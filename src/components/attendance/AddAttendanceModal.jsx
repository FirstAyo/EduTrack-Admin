import { useEffect, useMemo, useState } from "react";

export default function AddAttendanceModal({
  isOpen,
  onClose,
  employees,
  onSave,
}) {
  const [employeeName, setEmployeeName] = useState("");
  const [dateISO, setDateISO] = useState("");
  const [status, setStatus] = useState("");

  const employeeOptions = useMemo(() => employees ?? [], [employees]);

  useEffect(() => {
    if (!isOpen) return;
    setEmployeeName(employeeOptions[0] || "");
    setDateISO("");
    setStatus("");
  }, [isOpen, employeeOptions]);

  if (!isOpen) return null;

  const canSubmit = employeeName && dateISO && status;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    onSave({ employeeName, dateISO, status });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      {/* modal */}
      <div className="relative w-[92%] max-w-lg bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <h3 className="font-semibold text-slate-800">Add Attendance</h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-sm text-slate-600">Employee Name</label>
            <select
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              className="mt-2 w-full h-11 px-3 rounded-lg border border-slate-200 outline-none"
            >
              {employeeOptions.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-600">Date</label>
            <input
              type="date"
              value={dateISO}
              onChange={(e) => setDateISO(e.target.value)}
              className="mt-2 w-full h-11 px-3 rounded-lg border border-slate-200 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-slate-600">Attendance Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-2 w-full h-11 px-3 rounded-lg border border-slate-200 outline-none"
            >
              <option value="">Select Status</option>
              <option value="present">Present</option>
              <option value="none">Not Marked</option>
              <option value="absent">Absent</option>
            </select>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="submit"
              disabled={!canSubmit}
              className="h-11 px-5 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50"
            >
              + Add Attendance
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-11 px-6 rounded-lg bg-red-500 text-white font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

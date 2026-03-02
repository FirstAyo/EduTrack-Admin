import AttendanceStatusCell from "./AttendanceStatusCell";
import userIcon from "/avatars/female1.png";

const days = Array.from({ length: 30 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

export default function AttendanceTable({ rows, iconSrc }) {
  return (
    <div className="w-full overflow-x-auto border-t border-slate-200">
      <table className="min-w-[1200px] w-full text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr className="border-b border-slate-200">
            <th className="sticky left-0 bg-slate-50 z-10 text-left px-4 py-3 min-w-[260px]">
              Employee Name
            </th>
            {days.map((d) => (
              <th key={d} className="text-center px-3 py-3 font-medium">
                {d}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-slate-100">
              <td className="sticky left-0 bg-white z-10 px-4 py-4 min-w-[260px]">
                <div className="flex items-center gap-3">
                  <img
                    src={row.avatar}
                    alt={row.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-slate-800 tracking-wider">
                      {row.name}
                    </div>
                    <div className="text-xs text-slate-400 tracking-wider">
                      {row.employmentType}
                    </div>
                  </div>
                </div>
              </td>

              {row.attendance.slice(0, 30).map((status, idx) => (
                <td key={idx} className="text-center px-3 py-4">
                  <AttendanceStatusCell status={status} iconSrc={iconSrc} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

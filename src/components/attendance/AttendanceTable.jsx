import AttendanceStatusCell from "./AttendanceStatusCell";
// import userIcon from "/avatars/female1.png";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

const days = Array.from({ length: 30 }, (_, i) =>
  String(i + 1).padStart(2, "0"),
);

export default function AttendanceTable({ rows, iconSrc }) {
  return (
    <div className="pb-2">
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

      {/* bottom of table pagination */}
      <div className="flex items-center justify-between px-6 mt-5 py-2">
        <p>
          Showing <span>1</span> to <span>10</span> of <span>150</span> entries
        </p>

        <div className="flex items-center gap-2">
          <button className="cursor-pointer border py-1 px-2 border-slate-400 rounded-sm">
            <img
              src={arrowLeftIcon}
              alt="arrow left icon"
              className="h-6 w-6"
            />
          </button>
          {[1, 2, 3].map((num, idx) => (
            <button
              key={idx}
              className="cursor-pointer border py-1 px-4 border-slate-400 rounded-sm hover:bg-blue-600 hover:text-white"
            >
              {num}
            </button>
          ))}
          <button className="cursor-pointer border py-1 px-2 border-slate-400 rounded-sm">
            <img
              src={arrowRightIcon}
              alt="arrow right icon"
              className="h-6 w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AttendanceTabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex items-center gap-6 border-b border-slate-200 pb-2">
      {tabs.map((t) => {
        const active = t === activeTab;
        return (
          <button
            key={t}
            onClick={() => onTabChange(t)}
            className={[
              "text-sm font-medium",
              active
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-slate-500",
            ].join(" ")}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

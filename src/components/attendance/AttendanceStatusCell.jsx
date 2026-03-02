export default function AttendanceStatusCell({ status, iconSrc }) {
  // status values expected: "present" | "none" | "absent"
  const src = iconSrc?.[status];

  if (!src) return null;

  return (
    <img
      src={src}
      alt={status}
      className="w-4 h-4 inline-block"
    />
  );
}
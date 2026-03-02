import checkIcon from "/images/check.svg";
import minusIcon from "/images/minus.svg";

const ICONS = {
  present: checkIcon,
  none: minusIcon,
};

export default function AttendanceStatusCell({ status }) {
  const icon = ICONS[status];
  if (!icon) return null;

  return (
    <div>
      <img src={icon} alt={status} className="w-4 h-4 mx-auto" />
    </div>
  );
}

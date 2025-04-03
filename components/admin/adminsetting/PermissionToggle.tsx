import Toggle from "../../../utils/toogle"; // Adjust the import path as needed
import {PermissionToggleProps} from "../../../types/index";

export default function PermissionToggle({ label, checked, onChange }: PermissionToggleProps) {
  return (
    <div className="flex justify-between items-center py-3">
      <span className="font-primary font-normal text-[#414651]">{label}</span>
      <Toggle
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
}

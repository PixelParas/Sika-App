import { Home, ScanLine, Package, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className="w-full py-2 flex justify-around shadow-inner"
      style={{ backgroundColor: "#f8ece0", color: "#342e28" }}
    >
      <NavItem
        to="/home"
        icon={<Home size={22} />}
        label="Home"
        // Highlight if path is /home or root /
        isActive={currentPath === "/home" || currentPath === "/"}
      />
      <NavItem
        to="/home"
        icon={<ScanLine size={22} />}
        label="Scan"
        isActive={currentPath === "/scan"}
      />
      <NavItem
        to="/home"
        icon={<Package size={22} />}
        label="Products"
        isActive={currentPath === "/products"}
      />
      <NavItem
        to="/home"
        icon={<User size={22} />}
        label="Profile"
        isActive={currentPath === "/profile"}
      />
    </div>
  );
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function NavItem({ to, icon, label, isActive }: NavItemProps) {
  return (
    <Link to={to} className="flex flex-col items-center gap-1 text-xs">
      {/* Icon Capsule Container */}
      <div
        className="px-5 py-1 rounded-full transition-colors duration-200"
        style={{ backgroundColor: isActive ? "#f3dcba" : "transparent" }}
      >
        {icon}
      </div>
      {/* Label (No highlight) */}
      <span style={{ fontWeight: isActive ? 600 : 400 }}>
        {label}
      </span>
    </Link>
  );
}

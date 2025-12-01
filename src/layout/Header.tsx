// File: src/layout/Header.tsx
import { User } from "lucide-react";
import logo from "@/assets/pwa-icon.png";

export function Header() {
  return (
    <div className="w-full py-4 flex items-center justify-between px-4 shadow-lg" style={{ backgroundColor: "#ffd57d", color: "#342e28" }}>
      <div className="w-8" />
      <img src={logo} alt="Sika Logo" className="h-10 w-10 object-contain mx-auto" />
      <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center">
        <User style={{ color: "#342e28" }} />
      </div>
    </div>
  );
}

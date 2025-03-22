import type React from "react"
import { BookmarkIcon, Clock, LayoutGrid, Link2, Scan, User } from "lucide-react"
import { Logo } from "@/components/logo"

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-[#0F172A] text-white flex flex-col h-screen">
      {/* Logo and Brand */}
      <div className="p-4 flex items-center">
        <Logo />
        <span className="ml-2 text-xl font-bold">Gistify</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <NavItem icon={<LayoutGrid size={20} />} label="AI Radar" active />
          <NavItem icon={<Scan size={20} />} label="Scan" />
          <NavItem icon={<BookmarkIcon size={20} />} label="Read Later" />
          <NavItem icon={<Clock size={20} />} label="Time Machine" />
          <NavItem icon={<Link2 size={20} />} label="Connections" />
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
            <User size={16} />
          </div>
          <div className="ml-3">
            <div className="text-sm font-medium">Noam Levi</div>
            <div className="text-xs text-slate-400">Pro Plan</div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-4 py-2.5 text-sm ${
          active
            ? "bg-primary/10 text-primary border-l-2 border-primary"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`}
      >
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </a>
    </li>
  )
}


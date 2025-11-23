import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  PiSquaresFourDuotone,
  PiGitMergeDuotone,
  PiShieldCheckDuotone,
  PiGearDuotone,
  PiRobotDuotone
} from 'react-icons/pi';

export const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#121213]/90 backdrop-blur-md border-r border-[rgba(255,255,255,0.1)] z-50 flex flex-col">
      <div className="p-6 flex items-center gap-3">
        <PiRobotDuotone
          size={32}
          className="text-[#00d6cb] filter drop-shadow-[0_0_8px_rgba(0,214,203,0.5)]"
        />
        <h1 className="font-logo font-bold text-xl tracking-wide text-white">
          REGAIN<span className="text-[#00d6cb]">FLOW</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/" icon={PiSquaresFourDuotone} label="Dashboard" />
        <NavItem to="/pipeline" icon={PiGitMergeDuotone} label="Pipeline" />
        <NavItem to="/validation" icon={PiShieldCheckDuotone} label="Validation Rules" />
        <NavItem to="/settings" icon={PiGearDuotone} label="Settings" />
      </nav>

      <div className="p-6 border-t border-[rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00d6cb] to-[#00a89e] flex items-center justify-center text-xs font-bold text-black">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">John Doe</span>
            <span className="text-xs text-[#a6a6a6]">Data Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${isActive
        ? 'bg-[rgba(0,214,203,0.15)] text-[#00d6cb] border border-[rgba(0,214,203,0.2)] shadow-[0_0_10px_rgba(0,214,203,0.2)]'
        : 'text-[#a6a6a6] hover:bg-[rgba(255,255,255,0.05)] hover:text-white'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <Icon
          size={20}
          className={isActive ? 'drop-shadow-[0_0_5px_rgba(0,214,203,0.5)]' : ''}
        />
        <span className="font-medium text-sm">{label}</span>
      </>
    )}
  </NavLink>
);

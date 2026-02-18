import React from 'react';
/* Importing icons from lucide-react library for a professional look */
import { LayoutDashboard, Ticket, Users, Settings } from 'lucide-react';

/* We receive activeTab and setActiveTab as props from App.jsx to control the whole app */
const Sidebar = ({ activeTab, setActiveTab }) => {
  
  /* Navigation menu items array */
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Tickets', icon: <Ticket size={20} /> },
    { name: 'Agents', icon: <Users size={20} /> },
    { name: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    /* Sidebar Container - Fixed on Desktop, Drawer on Mobile */
    <div className="w-64 h-screen bg-[#0f172a] text-slate-300 p-6 flex flex-col fixed left-0 top-0 border-r border-slate-800 z-50">
      
      {/* Brand Identity Section */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/20">
          W
        </div>
        <span className="text-white font-bold text-xl tracking-tight uppercase">WeAnalyz</span>
      </div>

      {/* Dynamic Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li 
              key={item.name}
              /* When clicked, it updates the global state in App.jsx to switch pages */
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group ${
                activeTab === item.name 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className={`${activeTab === item.name ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile Footer Section */}
      <div className="border-t border-slate-800 pt-6">
        <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-xl cursor-pointer transition group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold border border-blue-400/20">
            AK
          </div>
          <div>
            {/* Displaying your name and title from the project profile */}
            <p className="text-sm font-bold text-white leading-tight">Aakash Kumar</p>
            <p className="text-xs text-slate-500 font-medium group-hover:text-slate-400 transition">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
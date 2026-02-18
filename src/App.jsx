import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CapacityCard from './components/CapacityCard';
import { Menu, X, Eye, LayoutDashboard, Ticket } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 1. Tab state ko manage karne ke liye (Dashboard default rahega)
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="flex min-h-screen bg-[#f8fafc] overflow-x-hidden font-sans">
      
      {/* SIDEBAR - Passing setActiveTab to handle menu switching */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 transform bg-[#0f172a] transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:inset-0
      `}>
        <Sidebar activeTab={activeTab} setActiveTab={(tab) => {
          setActiveTab(tab);
          setIsMenuOpen(false); // Mobile menu band karne ke liye
        }} />
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 h-screen overflow-y-auto">
        
        {/* MOBILE TOP BAR */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-30">
          <span className="font-bold text-blue-600 tracking-tight">WeAnalyz</span>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg bg-slate-100">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="p-5 md:p-10 max-w-7xl mx-auto">
          
          {/* 2. CONDITIONAL RENDERING: Yahan se content change hoga */}
          
          {activeTab === 'Dashboard' && (
            <div className="animate-in fade-in duration-500">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, Aakash!</p>
              </header>

              {/* Stats & Capacity Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatItem label="Total Tickets" value="1,284" trend="+12%" />
                <StatItem label="Resolved" value="892" trend="Active" />
                <StatItem label="Avg. Response" value="18m" trend="Fast" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <CapacityCard title="Ticketing Capacity" percentage={84} color="#2563eb" />
                <CapacityCard title="Agent Availability" percentage={62} color="#10b981" />
              </div>
            </div>
          )}

          {activeTab === 'Tickets' && (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <header className="mb-8 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">Tickets Management</h1>
                  <p className="text-slate-500">View and manage all customer queries.</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg shadow-blue-600/20 text-sm">
                  + Create New Ticket
                </button>
              </header>

              {/* Tickets Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Priority</th>
                      <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {[
                      { id: "#TK-2041", name: "Rahul Sharma", status: "Open", priority: "High" },
                      { id: "#TK-2038", name: "Sneha Kapoor", status: "Resolved", priority: "Low" },
                      { id: "#TK-2035", name: "Amit Verma", status: "In Progress", priority: "Med" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-bold text-slate-700 text-sm">{row.id}</td>
                        <td className="px-6 py-4 text-slate-600 text-sm font-medium">{row.name}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                            row.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-500">{row.priority}</td>
                        <td className="px-6 py-4 text-center">
                          <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg"><Eye size={18} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Simple placeholders for other tabs */}
          {(activeTab === 'Agents' || activeTab === 'Settings') && (
            <div className="flex flex-col items-center justify-center h-96 text-slate-400">
               <h2 className="text-2xl font-bold">{activeTab} Page</h2>
               <p>This section is under development.</p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

const StatItem = ({ label, value, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{label}</p>
    <h3 className="text-3xl font-extrabold text-slate-900 mt-2">{value}</h3>
    <span className="text-xs font-bold text-green-500">{trend}</span>
  </div>
);

export default App;
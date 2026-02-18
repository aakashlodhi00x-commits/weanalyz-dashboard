import React from 'react';

const CapacityCard = ({ title, percentage, color }) => {
  /* Logic: Calculate the circle circumference to show progress */
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{title}</p>
        <h3 className="text-3xl font-extrabold text-slate-900 mt-2">{percentage}%</h3>
        <p className="text-slate-500 text-xs mt-1 font-medium">System Load</p>
      </div>

      {/* Circular Progress Ring using SVG */}
      <div className="relative flex items-center justify-center">
        <svg className="w-24 h-24 transform -rotate-90">
          {/* Background Circle (Gray) */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-100"
          />
          {/* Progress Circle (Colored) */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-xs font-bold text-slate-700">{percentage}%</span>
      </div>
    </div>
  );
};

export default CapacityCard;
import React from 'react';
import { Metric } from '../types';

interface StatsGridProps {
  metrics: Metric[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="glass-card p-5 relative overflow-hidden group"
        >
          {/* Subtle glow background */}
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-[rgba(0,214,203,0.1)] rounded-full blur-2xl group-hover:bg-[rgba(0,214,203,0.2)] transition-all duration-500"></div>

          <div className="flex justify-between items-start mb-4 relative z-10">
            <div
              className={`p-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]`}
            >
              <metric.icon
                size={24}
                className="text-[#00d6cb] drop-shadow-[0_0_5px_rgba(0,214,203,0.5)]"
              />
            </div>
            <span
              className={`text-xs font-mono py-1 px-2 rounded-full border ${
                metric.isPositive
                  ? 'bg-[rgba(16,185,129,0.1)] text-[#10b981] border-[rgba(16,185,129,0.2)]'
                  : 'bg-[rgba(239,68,68,0.1)] text-[#ef4444] border-[rgba(239,68,68,0.2)]'
              }`}
            >
              {metric.change}
            </span>
          </div>

          <div className="relative z-10">
            <h3 className="text-[#a6a6a6] text-sm font-medium mb-1">
              {metric.title}
            </h3>
            <p className="text-2xl font-bold font-primary text-white tracking-tight">
              {metric.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

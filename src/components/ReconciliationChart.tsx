import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ReconciliationChartProps {
  data: any[];
}

export const ReconciliationChart: React.FC<ReconciliationChartProps> = ({
  data
}) => {
  return (
    <div className="glass-card p-6 h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-1 h-6 bg-[#ffd700] rounded-full shadow-[0_0_10px_rgba(255,215,0,0.5)]"></span>
            Reconciliation Trends
          </h2>
          <p className="text-sm text-[#a6a6a6] mt-1 ml-3">
            Matched records vs Mismatches (Hourly)
          </p>
        </div>
        <select className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#00d6cb]">
          <option>Last 12 Hours</option>
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorMatched" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d6cb" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00d6cb" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorMismatch" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}
              itemStyle={{ color: '#fff' }}
              labelStyle={{ color: '#a6a6a6', marginBottom: '0.5rem' }}
            />
            <Area
              type="monotone"
              dataKey="matched"
              stroke="#00d6cb"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMatched)"
            />
            <Area
              type="monotone"
              dataKey="mismatch"
              stroke="#ef4444"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMismatch)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

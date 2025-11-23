import React from 'react';
import { LogEntry } from '../types';
import {
  PiWarningDuotone,
  PiCheckCircleDuotone,
  PiXCircleDuotone
} from 'react-icons/pi';

interface ValidationTableProps {
  logs: LogEntry[];
}

export const ValidationTable: React.FC<ValidationTableProps> = ({ logs }) => {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="w-1 h-6 bg-[#10b981] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          Live Validation Logs
        </h2>
        <button className="text-[#00d6cb] text-sm hover:text-[#00ffff] transition-colors">
          View All Logs &rarr;
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.1)]">
              <th className="py-4 px-4 text-xs font-semibold text-[#a6a6a6] uppercase tracking-wider">
                Timestamp
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#a6a6a6] uppercase tracking-wider">
                Log ID
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#a6a6a6] uppercase tracking-wider">
                Source
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#a6a6a6] uppercase tracking-wider">
                Table Entity
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#a6a6a6] uppercase tracking-wider">
                Message
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#a6a6a6] uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
            {logs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              >
                <td className="py-4 px-4 text-sm font-mono text-[#a6a6a6]">
                  {log.timestamp}
                </td>
                <td className="py-4 px-4 text-sm font-mono text-white">
                  {log.id}
                </td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-[rgba(255,255,255,0.05)] text-white border border-[rgba(255,255,255,0.1)]">
                    {log.source}
                  </span>
                </td>
                <td className="py-4 px-4 text-sm text-[#00d6cb] font-mono">
                  {log.table}
                </td>
                <td
                  className="py-4 px-4 text-sm text-[#a6a6a6] max-w-xs truncate"
                  title={log.message}
                >
                  {log.message}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {log.status === 'success' && (
                      <PiCheckCircleDuotone
                        className="text-[#10b981]"
                        size={18}
                      />
                    )}
                    {log.status === 'warning' && (
                      <PiWarningDuotone className="text-[#ffd700]" size={18} />
                    )}
                    {log.status === 'error' && (
                      <PiXCircleDuotone className="text-[#ef4444]" size={18} />
                    )}
                    <span
                      className={`text-xs font-medium capitalize ${
                        log.status === 'success'
                          ? 'text-[#10b981]'
                          : log.status === 'warning'
                          ? 'text-[#ffd700]'
                          : 'text-[#ef4444]'
                      }`}
                    >
                      {log.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

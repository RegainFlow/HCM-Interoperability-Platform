import React, { useState } from 'react';
import { PiPlusBold, PiToggleLeftFill, PiToggleRightFill, PiTrashDuotone, PiPencilSimpleDuotone } from 'react-icons/pi';

interface Rule {
    id: string;
    name: string;
    category: string;
    severity: 'Critical' | 'Warning' | 'Info';
    status: 'Active' | 'Inactive';
    lastTriggered: string;
}

const INITIAL_RULES: Rule[] = [
    { id: '1', name: 'Schema Validation', category: 'Structure', severity: 'Critical', status: 'Active', lastTriggered: '2 mins ago' },
    { id: '2', name: 'Null Check: EmployeeID', category: 'Data Quality', severity: 'Critical', status: 'Active', lastTriggered: '5 mins ago' },
    { id: '3', name: 'Date Format Consistency', category: 'Format', severity: 'Warning', status: 'Active', lastTriggered: '1 hour ago' },
    { id: '4', name: 'Salary Range Check', category: 'Business Logic', severity: 'Warning', status: 'Inactive', lastTriggered: 'Yesterday' },
    { id: '5', name: 'Duplicate Record Check', category: 'Data Quality', severity: 'Critical', status: 'Active', lastTriggered: '10 mins ago' },
];

export const ValidationView: React.FC = () => {
    const [rules, setRules] = useState<Rule[]>(INITIAL_RULES);

    const toggleRule = (id: string) => {
        setRules(prev => prev.map(rule =>
            rule.id === id ? { ...rule, status: rule.status === 'Active' ? 'Inactive' : 'Active' } : rule
        ));
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2 text-white">Validation Rules</h1>
                    <p className="text-[#a6a6a6]">Manage and configure data validation logic.</p>
                </div>
                <button className="neon-button px-4 py-2 text-sm font-medium flex items-center gap-2">
                    <PiPlusBold />
                    Add New Rule
                </button>
            </div>

            <div className="glass-card overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]">
                            <th className="p-4 text-xs font-mono text-[#a6a6a6] uppercase">Rule Name</th>
                            <th className="p-4 text-xs font-mono text-[#a6a6a6] uppercase">Category</th>
                            <th className="p-4 text-xs font-mono text-[#a6a6a6] uppercase">Severity</th>
                            <th className="p-4 text-xs font-mono text-[#a6a6a6] uppercase">Status</th>
                            <th className="p-4 text-xs font-mono text-[#a6a6a6] uppercase">Last Triggered</th>
                            <th className="p-4 text-xs font-mono text-[#a6a6a6] uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rules.map((rule) => (
                            <tr key={rule.id} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                                <td className="p-4 font-medium text-white">{rule.name}</td>
                                <td className="p-4 text-[#a6a6a6]">{rule.category}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${rule.severity === 'Critical' ? 'bg-red-500/20 text-red-500' :
                                            rule.severity === 'Warning' ? 'bg-yellow-500/20 text-yellow-500' :
                                                'bg-blue-500/20 text-blue-500'
                                        }`}>
                                        {rule.severity}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <button onClick={() => toggleRule(rule.id)} className="text-2xl transition-colors">
                                        {rule.status === 'Active' ? (
                                            <PiToggleRightFill className="text-[#00d6cb]" />
                                        ) : (
                                            <PiToggleLeftFill className="text-[#666]" />
                                        )}
                                    </button>
                                </td>
                                <td className="p-4 text-[#a6a6a6] font-mono text-sm">{rule.lastTriggered}</td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg text-[#a6a6a6] hover:text-white transition-colors">
                                            <PiPencilSimpleDuotone size={18} />
                                        </button>
                                        <button className="p-2 hover:bg-[rgba(239,68,68,0.1)] rounded-lg text-[#a6a6a6] hover:text-red-500 transition-colors">
                                            <PiTrashDuotone size={18} />
                                        </button>
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

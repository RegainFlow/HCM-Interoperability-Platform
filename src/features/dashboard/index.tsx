import React from 'react';
import { usePipeline } from '../../providers/PipelineProvider';
import { StatsGrid } from '../../components/StatsGrid';
import { PipelineVisualizer } from '../../components/PipelineVisualizer';
import { ReconciliationChart } from '../../components/ReconciliationChart';
import { ValidationTable } from '../../components/ValidationTable';
import {
    METRICS,
    RECENT_LOGS,
    RECONCILIATION_DATA
} from '../../config/constants';
import { PiBellDuotone, PiMagnifyingGlassDuotone, PiSpinnerGapDuotone } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { stages, isValidating, runValidation } = usePipeline();

    return (
        <>
            {/* Top Header */}
            <header className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-bold mb-2 text-white">
                        Validation Dashboard
                    </h1>
                    <p className="text-[#a6a6a6]">
                        SAP Integration Layer • Environment:{' '}
                        <span className="text-[#00d6cb] font-mono">PROD-01</span>
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        <PiMagnifyingGlassDuotone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]" />
                        <input
                            type="text"
                            placeholder="Search tables, logs..."
                            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#00d6cb] focus:ring-1 focus:ring-[#00d6cb] transition-all w-64"
                        />
                    </div>

                    {/* Notifications */}
                    <button className="relative p-2 rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                        <PiBellDuotone size={24} className="text-white" />
                        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#ef4444] rounded-full border-2 border-[#121213]"></span>
                    </button>

                    <button
                        onClick={runValidation}
                        disabled={isValidating}
                        className={`neon-button px-4 py-2 text-sm font-medium flex items-center gap-2 ${isValidating ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isValidating && <PiSpinnerGapDuotone className="animate-spin" />}
                        {isValidating ? 'Validating...' : 'Run Validation'}
                    </button>
                </div>
            </header>

            {/* Top Metrics Grid */}
            <StatsGrid metrics={METRICS} />

            {/* Pipeline Visualization */}
            <PipelineVisualizer stages={stages} />

            {/* Split View: Charts & Tables */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                <ReconciliationChart data={RECONCILIATION_DATA} />

                {/* Quick Status / Anomalies Card */}
                <div className="glass-card p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,214,203,0.05)] to-transparent pointer-events-none"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-[#10b981] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <span className="text-2xl font-bold text-[#10b981]">99.8%</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                        System Health
                    </h3>
                    <p className="text-[#a6a6a6] max-w-sm mb-6">
                        All 300+ tables across TE, GL, Payroll, and HRIS are syncing
                        within defined thresholds. Schema normalization active.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-sm border border-[rgba(255,255,255,0.1)] transition-colors">
                            View System Report
                        </button>
                        <button
                            onClick={() => navigate('/validation')}
                            className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-sm border border-[rgba(255,255,255,0.1)] transition-colors"
                        >
                            Config Rules
                        </button>
                    </div>
                </div>
            </div>

            {/* Detailed Logs */}
            <ValidationTable logs={RECENT_LOGS} />
        </>
    );
};

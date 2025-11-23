import React from 'react';
import { PiArrowRightBold, PiDatabaseDuotone, PiGitMergeDuotone, PiCheckCircleDuotone, PiWarningCircleDuotone } from 'react-icons/pi';
import { usePipeline } from '../../providers/PipelineProvider';

export const PipelineView: React.FC = () => {
    const { stages } = usePipeline();

    // Helper to get status for a specific stage name
    const getStageStatus = (namePart: string) => {
        const stage = stages.find(s => s.name.includes(namePart));
        if (!stage) return 'waiting';
        // Map pipeline status to visual status
        if (stage.status === 'processing') return 'active';
        if (stage.status === 'completed') return 'active';
        return stage.status === 'pending' ? 'waiting' : 'active';
    };

    const isProcessing = (namePart: string) => {
        const stage = stages.find(s => s.name.includes(namePart));
        return stage?.status === 'processing';
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2 text-white">Integration Pipeline</h1>
            <p className="text-[#a6a6a6] mb-8">
                Real-time visualization of data flow from source systems to SAP.
            </p>

            <div className="glass-card p-8 overflow-x-auto">
                <div className="min-w-[1000px] flex justify-between items-center relative py-10">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[rgba(255,255,255,0.05)] -translate-y-1/2 z-0"></div>

                    {/* Source Systems (Always Active) */}
                    <PipelineNode
                        title="Source Systems"
                        subtitle="TE, GL, Payroll"
                        icon={PiDatabaseDuotone}
                        status="active"
                    />

                    <PipelineArrow />

                    {/* Ingestion */}
                    <PipelineNode
                        title="Ingestion Layer"
                        subtitle="Kafka Streams"
                        icon={PiGitMergeDuotone}
                        status={getStageStatus('Ingestion')}
                        isPulse={isProcessing('Ingestion')}
                    />

                    <PipelineArrow />

                    {/* Validation Engine */}
                    <PipelineNode
                        title="Validation Engine"
                        subtitle="Business Rules"
                        icon={PiCheckCircleDuotone}
                        status={getStageStatus('Rule')}
                        isPulse={isProcessing('Rule')}
                    />

                    <PipelineArrow />

                    {/* Reconciliation */}
                    <PipelineNode
                        title="Reconciliation"
                        subtitle="Anomaly Detection"
                        icon={PiWarningCircleDuotone}
                        status={getStageStatus('Reconciliation')}
                        isPulse={isProcessing('Reconciliation')}
                    />

                    <PipelineArrow />

                    {/* SAP Integration */}
                    <PipelineNode
                        title="SAP Integration"
                        subtitle="S/4HANA"
                        icon={PiDatabaseDuotone}
                        status={getStageStatus('SAP')}
                        isPulse={isProcessing('SAP')}
                    />
                </div>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                    <MetricCard label="Average Latency" value="45ms" trend="-12%" trendUp={false} />
                    <MetricCard label="Throughput" value="12.5k/sec" trend="+5%" trendUp={true} />
                    <MetricCard label="Error Rate" value="0.02%" trend="-0.01%" trendUp={false} />
                </div>
            </div>
        </div>
    );
};

const PipelineNode: React.FC<{
    title: string;
    subtitle: string;
    icon: React.ElementType;
    status: 'active' | 'waiting' | 'error';
    isPulse?: boolean;
}> = ({ title, subtitle, icon: Icon, status, isPulse }) => (
    <div className="relative z-10 flex flex-col items-center bg-[#121213] p-4 rounded-xl border border-[rgba(255,255,255,0.1)] min-w-[180px]">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${status === 'active'
                ? 'bg-[rgba(0,214,203,0.1)] text-[#00d6cb] border border-[#00d6cb] shadow-[0_0_15px_rgba(0,214,203,0.3)]'
                : 'bg-[rgba(255,255,255,0.05)] text-[#666] border border-[rgba(255,255,255,0.1)]'
            } ${isPulse ? 'animate-pulse' : ''}`}>
            <Icon size={32} />
        </div>
        <h3 className={`font-bold ${status === 'active' ? 'text-white' : 'text-[#666]'}`}>{title}</h3>
        <p className="text-xs text-[#a6a6a6]">{subtitle}</p>
    </div>
);

const PipelineArrow = () => (
    <div className="relative z-10 bg-[#121213] p-2 rounded-full border border-[rgba(255,255,255,0.1)]">
        <PiArrowRightBold className="text-[#666]" />
    </div>
);

const MetricCard: React.FC<{ label: string; value: string; trend: string; trendUp: boolean }> = ({ label, value, trend, trendUp }) => (
    <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-lg border border-[rgba(255,255,255,0.05)]">
        <p className="text-[#a6a6a6] text-sm mb-1">{label}</p>
        <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white">{value}</span>
            <span className={`text-xs mb-1 ${trendUp ? 'text-[#10b981]' : 'text-[#00d6cb]'}`}>{trend}</span>
        </div>
    </div>
);

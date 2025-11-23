import React from 'react';
import {
  PiArrowRightBold,
  PiCheckBold,
  PiSpinnerGapBold
} from 'react-icons/pi';
import { PipelineStage } from '../types';

interface PipelineVisualizerProps {
  stages: PipelineStage[];
}

export const PipelineVisualizer: React.FC<PipelineVisualizerProps> = ({
  stages
}) => {
  return (
    <div className="glass-card p-6 mb-8">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-[#00d6cb] rounded-full shadow-[0_0_10px_rgba(0,214,203,0.5)]"></span>
        Validation Pipeline Live Status
      </h2>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mt-8 px-4">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[rgba(255,255,255,0.1)] -translate-y-1/2 z-0"></div>

        {stages.map((stage, index) => {
          const isActive = stage.status === 'active' || stage.status === 'processing';
          const isCompleted = stage.status === 'completed';
          const isError = stage.status === 'error';

          return (
            <div
              key={stage.id}
              className="relative z-10 flex flex-col items-center w-full lg:w-auto"
            >
              {/* Node Circle */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive
                  ? 'bg-[#121213] border-[#00d6cb] shadow-[0_0_20px_rgba(0,214,203,0.4)] scale-110'
                  : isCompleted
                    ? 'bg-[#121213] border-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                    : isError
                      ? 'bg-[#121213] border-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.2)]'
                      : 'bg-[#1a1a1a] border-[rgba(255,255,255,0.1)]'
                  }`}
              >
                {isActive ? (
                  <PiSpinnerGapBold
                    size={24}
                    className="text-[#00d6cb] animate-spin"
                  />
                ) : isCompleted ? (
                  <PiCheckBold size={24} className="text-[#10b981]" />
                ) : (
                  <span className="text-[#666] font-mono text-sm">
                    {index + 1}
                  </span>
                )}
              </div>

              {/* Label Info */}
              <div className="mt-4 text-center">
                <h3
                  className={`font-medium text-sm mb-1 ${isActive ? 'text-[#00d6cb] text-neon' : 'text-white'
                    }`}
                >
                  {stage.name}
                </h3>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-[#a6a6a6] font-mono">
                    {stage.itemsProcessed.toLocaleString()} /{' '}
                    {stage.totalItems.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#666] font-mono uppercase">
                    LATENCY: {stage.latency}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              {(isActive || isCompleted) && (
                <div className="absolute -bottom-2 w-full max-w-[80px] h-1 bg-gray-800 rounded-full overflow-hidden mt-2">
                  <div
                    className={`h-full bg-[#00d6cb] ${isActive ? 'animate-pulse' : ''}`}
                    style={{
                      width: `${isCompleted ? 100 : (stage.itemsProcessed / stage.totalItems) * 100
                        }%`
                    }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

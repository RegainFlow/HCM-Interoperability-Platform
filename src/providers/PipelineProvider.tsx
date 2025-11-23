import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PIPELINE_STAGES } from '../config/constants';
import { PipelineStage } from '../types';

interface PipelineContextType {
    stages: PipelineStage[];
    isValidating: boolean;
    runValidation: () => void;
}

const PipelineContext = createContext<PipelineContextType | undefined>(undefined);

export const PipelineProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [stages, setStages] = useState<PipelineStage[]>(PIPELINE_STAGES);
    const [isValidating, setIsValidating] = useState(false);
    const [hasAutoRun, setHasAutoRun] = useState(false);

    const runValidation = useCallback(() => {
        if (isValidating) return;
        setIsValidating(true);

        // Reset all stages to pending
        setStages(prev => prev.map(s => ({ ...s, status: 'pending', itemsProcessed: 0 })));

        const processStage = (index: number) => {
            if (index >= stages.length) {
                setIsValidating(false);
                return;
            }

            // Set current stage to processing
            setStages(prev => prev.map((s, i) =>
                i === index ? { ...s, status: 'processing' } : s
            ));

            // Simulate progress within the stage
            let progress = 0;
            const totalItems = stages[index].totalItems;
            const steps = 20; // More steps for smoother animation
            const stepSize = totalItems / steps;

            let currentStep = 0;

            const progressInterval = setInterval(() => {
                currentStep++;
                progress = Math.min(currentStep * stepSize, totalItems);

                setStages(prev => prev.map((s, i) => {
                    if (i === index) {
                        return {
                            ...s,
                            itemsProcessed: Math.round(progress)
                        };
                    }
                    return s;
                }));

                if (currentStep >= steps) {
                    clearInterval(progressInterval);

                    // Mark as completed and move to next
                    setStages(prev => prev.map((s, i) =>
                        i === index ? { ...s, status: 'completed', itemsProcessed: totalItems } : s
                    ));

                    // Small delay before next stage
                    setTimeout(() => {
                        processStage(index + 1);
                    }, 300);
                }
            }, 100); // Faster updates
        };

        // Start processing first stage
        processStage(0);
    }, [isValidating, stages.length]);

    // Auto-run on mount
    useEffect(() => {
        if (!hasAutoRun) {
            runValidation();
            setHasAutoRun(true);
        }
    }, [hasAutoRun, runValidation]);

    return (
        <PipelineContext.Provider value={{ stages, isValidating, runValidation }}>
            {children}
        </PipelineContext.Provider>
    );
};

export const usePipeline = () => {
    const context = useContext(PipelineContext);
    if (context === undefined) {
        throw new Error('usePipeline must be used within a PipelineProvider');
    }
    return context;
};

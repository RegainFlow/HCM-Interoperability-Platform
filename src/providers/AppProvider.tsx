import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PipelineProvider } from './PipelineProvider';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <PipelineProvider>
                    {children}
                </PipelineProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

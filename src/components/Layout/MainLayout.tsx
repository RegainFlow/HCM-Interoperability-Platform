import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

export const MainLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#121213] text-white flex font-primary">
            {/* Navigation Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="ml-64 flex-1 p-8">
                <Outlet />
            </main>
        </div>
    );
};

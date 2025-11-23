import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { Dashboard } from '../features/dashboard';
import { PipelineView } from '../features/pipeline';
import { ValidationView } from '../features/validation';
import { SettingsView } from '../features/settings';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/pipeline" element={<PipelineView />} />
                <Route path="/validation" element={<ValidationView />} />
                <Route path="/settings" element={<SettingsView />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

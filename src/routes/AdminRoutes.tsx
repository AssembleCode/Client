import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'modules/Dashboard/Dashboard';
import { AdminTheme } from 'theme/Admin';

const AdminRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<AdminTheme.Common.MainLayout />}>
                <Route path={`/dashboard`} element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default AdminRoutes;

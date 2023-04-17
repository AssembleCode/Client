import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const VisitorRoutes = React.lazy(() => import('./VisitorRoutes'));
const AdminRoutes = React.lazy(() => import('./AdminRoutes'));

const AppRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={"/admin/*"} element={<AdminRoutes />} />
            <Route path={"/*"} element={<VisitorRoutes />} />
        </Routes>
    );
};

export default AppRoutes;
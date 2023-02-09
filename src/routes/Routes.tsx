import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const VisitorRoutes = React.lazy(() => import('./VisitorRoutes'));

const AppRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={"/*"} element={<VisitorRoutes />} />
        </Routes>
    );
};

export default AppRoutes;
import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'modules/LandingPage';
import { PublicTheme } from 'theme/Public';

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<PublicTheme.Common.MainLayout />}>
                <Route path={`/`} element={<LandingPage />} />
            </Route>
        </Routes>
    );
};

export default VisitorRoutes;

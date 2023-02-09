import React, { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'modules/LandingPage';

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={`/`} element={<LandingPage />} />
        </Routes>
    );
};

export default VisitorRoutes;

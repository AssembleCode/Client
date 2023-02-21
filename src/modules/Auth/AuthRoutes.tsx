import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginController from './components/Login/Login.controller';
import RegisterController from './components/Register/Register.controller';

const AuthRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/register'} element={<RegisterController />} />
            <Route path={'/login'} element={<LoginController />} />
        </Routes>
    )
}

export default AuthRoutes;



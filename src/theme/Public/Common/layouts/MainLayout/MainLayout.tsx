import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout: React.FC = () => {
    return (
        <div className='container container-fluid'>
            <div className="header">
                <h1>Hello header</h1>
            </div>
            <Outlet />
            <div className="footer">
                <h1>Hello footer</h1>
            </div>
        </div>
    )
}

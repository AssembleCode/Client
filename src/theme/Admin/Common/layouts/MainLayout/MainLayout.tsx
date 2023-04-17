import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faDesktop, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './MainLayout.scss';

export const MainLayout: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <main>
            
            <div className="container">
                <Outlet />
            </div>

        </main>
    )
}

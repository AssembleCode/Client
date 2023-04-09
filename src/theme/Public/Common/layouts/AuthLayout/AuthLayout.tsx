import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { faEnvelope, faPhone, faLocationDot, faDesktop, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const AuthLayout: React.FC = () => {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <Outlet />
        </div>
    );
}
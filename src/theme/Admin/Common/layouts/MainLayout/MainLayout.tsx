import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faDesktop, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './MainLayout.scss';
import { Layout, Menu } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import MainHeader from '../../components/Header/Header';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';

export const MainLayout: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <LeftSidebar isCollapsed={isCollapsed} />

            <Layout className="site-layout" style={{ marginLeft: isCollapsed ? 80 : 200 }}>
                <MainHeader isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <Content
                    style={{
                        margin: '24px 16px 0',
                        padding: 24,
                        minHeight: 280,
                        background: 'white',
                        overflow: 'initial'
                    }}
                >
                    <div className="container">
                        <Outlet />
                    </div>
                </Content>
            </Layout>

        </Layout>
    )
}

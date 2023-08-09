import React, { FC, useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, NavLink } from "react-router-dom";
import { UploadOutlined, UserOutlined, VideoCameraOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import bgLogoImg from './../../../../../assets/images/bglogo.png';
import { ObjectUtils } from "utils";
import { LeftSidebarMenu } from "./LeftSidebar.menu";

const LeftSidebar: FC<any> = props => {
    const { isCollapsed } = props;
    // const { isPermissionLoaded, hasPermission } = usePermissionContext();
    const [navigationList, setNavigationList] = useState<any>([]);

    useEffect(() => {
        let LeftSidebarMenuList = ObjectUtils.objectClone(LeftSidebarMenu);
        setNavigationList(LeftSidebarMenuList);
    });

    return (
        <Sider trigger={null} collapsible collapsed={isCollapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            {/* <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} /> */}
            <div className="logo" style={{ height: 32, margin: 16 }}>
                <Link to='/' className="company-logo-link">
                    <img src={bgLogoImg} alt="Company Logo" style={{ maxHeight: '30px', marginRight: '10px' }} />
                    <h1 className="d-none d-md-inline-block" style={{ fontSize: '14px' }}>Assemble Code</h1>
                </Link>
            </div>

            <Menu
                className='mt-5'
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={navigationList}
            />

            {/* <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                {navigationList.map((item: any, index: number) => {
                    return (
                        <>
                            {item.children.length > 0 && (
                                <li key={index} className="nav-item">
                                    <a href="javascript:void(0)" className="nav-link align-middle px-0">{item.title}</a>

                                    <ul className="collapse show nav flex-column ms-1" id="submenu1">
                                        {item.children.map((childItem: any, childIndex: number) => (
                                            <li key={`setting-sub-nav-${index}-${childIndex}`} className="w-100">
                                                <NavLink to={childItem.link.to} className={'nav-link px-0'}>{childItem.title}</NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                        </>
                    )
                })}
            </ul> */}
        </Sider>
    )

}

export default LeftSidebar;
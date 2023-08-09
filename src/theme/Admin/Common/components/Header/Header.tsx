import React, { FC } from "react";
import { Header } from 'antd/es/layout/layout';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import './Header.scss';


const MainHeader: FC<any> = props => {
    const { isCollapsed, setIsCollapsed } = props;

    return (
        <Header className="header" style={{ paddingLeft: '10px', background: 'white', fontSize: '20px', position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setIsCollapsed(!isCollapsed),
            })}
        </Header>
    );

}

export default MainHeader;
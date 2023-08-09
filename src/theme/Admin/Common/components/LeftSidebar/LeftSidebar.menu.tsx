import React from "react";

export const LeftSidebarMenu = [
    {
        key: 'sub0',
        label: 'Dashboard'
    },
    {
        key: `sub1`,
        // icon: React.createElement('calendar-outline'),
        label: `My Settings`,

        children: [
            {
                key: `sub1-1`,
                label: `My Profile`,
            },
            {
                key: `sub1-2`,
                label: `My Social Accounts`,
            }
        ]
    },
    {
        key: `sub2`,
        // icon: React.createElement('calendar-outline'),
        label: `Site Settings`,

        children: [
            {
                key: `sub2-1`,
                label: `General Configuration`,
            },
            {
                key: `sub2-2`,
                label: `Notifications`,
            }
        ]
    }
    // {
    //     type: 'group',
    //     title: 'My Settings',
    //     icon: 'calendar-outline',
    //     class: '',
    //     expanded: true,
    //     hidden: false,
    //     children: [
    //         {
    //             type: 'item',
    //             title: 'My Profile',
    //             permission: 'auth:user:myAccount',
    //             link: { to: '/setting/my-account/my-profile', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'My Settings',
    //             permission: 'auth:user:mySetting',
    //             link: { to: '/setting/my-account/my-setting', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'My Social Accounts',
    //             permission: 'auth:user:mySetting',
    //             link: { to: '/setting/my-account/my-social-account', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'Change Password',
    //             permission: 'auth:oauth:changePassword',
    //             link: { to: '/setting/my-account/change-password', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //     ],
    // },
    // {
    //     type: 'group',
    //     title: 'Site Settings',
    //     icon: 'calendar-outline',
    //     class: '',
    //     expanded: true,
    //     hidden: false,
    //     children: [
    //         {
    //             type: 'item',
    //             title: 'General Configuration',
    //             permission: 'core:setting:generalConfiguration',
    //             link: { to: '/setting/general-setting/general-configuration', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //         {
    //             type: 'item',
    //             title: 'Notifications',
    //             permission: 'core:setting:notification',
    //             link: { to: '/setting/general-setting/notification', exactMatch: true, externalUrl: false, openInNewTab: false },
    //             icon: '',
    //             class: '',
    //             badge: '',
    //             badgeClass: '',
    //             hidden: false,
    //         },
    //     ],
    // },
];
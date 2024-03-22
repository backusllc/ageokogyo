import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { navLinks, li } from './index.css'

export const McMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    async function fetchMenu() {
        const menu = [
            {
                index : '1',
                url: '',
                label: 'ONLINE STORE',
            },
            {
                index : '2',
                url: '/information',
                label: 'NEWS',
            },
            {
                index : '3',
                url: '/recruit',
                label: 'RECRUIT',
            },
            {
                index : '4',
                url: '/company',
                label: 'COMPANY',
            },
            {
                index : '5',
                url: '/faq',
                label: 'FAQ',
            },
            {
                index : '6',
                url: '/contactus',
                label: 'CONTACT',
            },
        ]
        setMenu(menu);

        // try {
        //     const menuData = (await API.graphql({
        //         query: listMenus,
        //         authMode: isAuthenticated ? GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS : GRAPHQL_AUTH_MODE.AWS_IAM
        //     })) as GraphQLResult<ListMenusQuery>;
        //     setMenu(menuData.data?.listMenus?.items);
        // }
        // catch (error) {
        // }
    };

    return (
        <ul className={navLinks}>
            {menu.map((item, index) => {
                return <li className={li} key={index}><Link to={item?.url} >{item?.label}</Link></li>
            })
            }
        </ul>
    )
}

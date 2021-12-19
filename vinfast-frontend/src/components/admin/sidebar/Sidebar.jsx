import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import './sidebar.scss'

import logo_main_w from '../../../assets/logo-main-w.svg';

import sidebar_items from '../../../assets/JsonData/sidebar_routes.json';

const SidebarItem = props => {
    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
    )
}

const Sidebar = props => {

    const location = useLocation();
    const activeItem = sidebar_items.findIndex(item => `/admin/${item.route}` === location.pathname)
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo_main_w} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={`/admin/${item.route}`} key={index} >
                        <SidebarItem 
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar

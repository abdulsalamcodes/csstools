import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo'
import './Sidebar.css';

const NavItem = ({ route, text }) => {
    return <li>
        <NavLink to={route} className="NavItem" exact>
            {text}
        </NavLink>
    </li>
}

function Sidebar() {
    return (
        <div className="Sidebar">
            <Logo />
            <ul className="NavItems">
                <NavItem route='/'  text="Home" />
                <NavItem route='/css-shadow' text="CSS Shadow" />
                <NavItem route='/css-gradient' text="CSS Gradient" />
                <NavItem route='/flexbox' text="CSS Flexbox" />
                <NavItem route='/grid' text="CSS Grid" />
            </ul>
        </div>
    )
}

export default Sidebar

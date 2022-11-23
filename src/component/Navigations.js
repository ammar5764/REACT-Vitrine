import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink
                    to="/" className={(nav) => (nav.isActive ? "nav-active hover" : "hover")} >
                    {/* //hover est une class pour tout les liens cliquables pour le retrecissement de la souris */}
                    <li>accueil</li>
                </NavLink>

                <li className='nav-portfolio'>portfolio
                    <ul className='nav-projects'>
                        <NavLink to='/projet-1' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>projet 1</li>
                        </NavLink>
                        <NavLink to='/projet-2' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>projet 2</li>
                        </NavLink>
                        <NavLink to='/projet-3' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>projet 3</li>
                        </NavLink>
                        <NavLink to='/projet-4' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                            <li>projet 4</li>
                        </NavLink>
                    </ul>
                </li>

                <NavLink to='/contact' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>contact</li>
                </NavLink>
                <NavLink to='/blog' className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}>
                    <li>blog</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigations;
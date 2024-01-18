import React from 'react';
import '../../assets/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ title }) => {
    const navigate = useNavigate();
    const location = useLocation();



    const NavbarItem = ({ itemTitle, targetPath }) => {
        const isActive = location.pathname === targetPath;

        const handleItemClick = () => {
            navigate(targetPath);
        };

        return (
            <div className={`navbar-item ${isActive ? 'navbar-item-active' : ''}`} onClick={handleItemClick}>
                {itemTitle}
            </div>
        );
    };

    return (
        <div className='navbar-container'>
            <div className="navbar-left">
                {title}
            </div>
            <div className="navbar-center">
                <NavbarItem itemTitle={"Home"} targetPath="/home" />
                <NavbarItem itemTitle={"Blog"} targetPath="/blog"/>
                <NavbarItem itemTitle={"Projects"} targetPath="/projects" />
                <NavbarItem itemTitle={"Contact"} targetPath="/contact" />
            </div>
        </div>
    );
};

export default Navbar;




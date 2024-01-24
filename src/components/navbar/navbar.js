import React, { useState, useEffect } from 'react';
import '../../assets/Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import arrivederciao from '../../assets/media/arrivederciao.png';

const Navbar = ({ title }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isNavbarVisible, setNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingDown = prevScrollPos < currentScrollPos;

        setNavbarVisible(!isScrollingDown || currentScrollPos < 1);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const NavbarItem = ({ itemTitle, targetPath, navbarItemImage }) => {
        const isActive = location.pathname === targetPath;

        const handleItemClick = () => {
            navigate(targetPath);
        };

        return (
            <div className={`navbar-item ${isActive ? 'navbar-item-active' : ''}`} onClick={handleItemClick}>
                {navbarItemImage && <img className="navbar-item-image" src={navbarItemImage} alt="icon" />}
                {itemTitle}
            </div>
        );
    };

    return (
        <div className={`navbar-container ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="navbar-left">
                <div className="navbar-logo-wrapper">
                    <img className="navbar-logo" src={arrivederciao} alt="logo" />
                </div>
            </div>
            <div className="navbar-center">
                <NavbarItem itemTitle={"Home"} targetPath="/home" />
                <NavbarItem itemTitle={"Blog"} targetPath="/blog" />
                <NavbarItem itemTitle={"Projects"} targetPath="/projects" />
                <NavbarItem itemTitle={"Contact"} targetPath="/contact" />
            </div>
        </div>
    );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components'
import { menuContext } from "../App";
import { useContext, useEffect } from "react";

import Open from './Images/Open.png'
import Close from './Images/Close.png'

const NavButton = styled.div`
    text-decoration: none;
    margin: 20px;
    display: flex;
    position: fixed;
    bottom: 15px;
    right: 15px;
    height: 120px;
    width: 120px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s ease-out;
    z-index: 999;

    &:hover {
        transform: translateY(-0.25rem);
    }

    @media (max-width: 768px) {
        height: 80px;
        width: 80px;
    }
`;

const NavUnlisted = styled.div`
    text-align: center;
    text-decoration: none;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 110px;
    right: 90px;
    background: rgba(255,255,255,0.8);
    border: 3px;
    border-style: dashed;
    border-color: rgb(103,74,41);
    border-radius: 10px;
    z-index: 1000;

    @media (max-width: 768px) {
        bottom: 90px;
        right: 60px;
    }
`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    margin: 8px;
    outline: none;

    p {
    font-size: 18px;
    padding: 2px 6px;
    border-radius: 10px;
    font-family: "Pixelify Sans";
    color: grey;      
    display: inline;
    }

    span {
    display: none;
    }

    &:focus p {
    color: palevioletred;
    border-style: dotted;
    }

    &:hover p {
    color: palevioletred;
    border-style: dotted;
    }

    &:focus span {
    color: palevioletred;
    display: inline;
    }

    &:hover span {
    color: palevioletred;
    display: inline;
    }
`;

function PageMenu() {
    const location = useLocation();
    
    /**To hide Active/Current Page from Menu */
    const {activePage} = useContext(menuContext);

    /**To trigger Nav Menu */
    const [showMenu, setShowMenu] = React.useState(false);

    /**For showing button based on scroll + screen size */
    const [showButton, setShowButton] = useState(false);

    /**For Animation */
    let [menuState, setMenuState] = useState(Close);

    useEffect(() => {
        function handleScroll() {
          const isMobile = window.innerWidth <= 768;
          const scrolledDown = window.scrollY > 0;
          const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
          // Show button only on mobile and if scrolled down
          setShowButton(!isMobile || (isMobile && (scrolledDown || !isScrollable)));
        }
    
        handleScroll();
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleScroll);
        };
      }, [location.pathname]);

    const openMenu = () => {
        setShowMenu(true);
        setMenuState(Open);
    }

    const closeMenu = () => {
        setShowMenu(false);
        setMenuState(Close);
    }

    if (!showButton) return null;

    return (
        <div>
        <NavButton onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <img src={menuState} alt='Page Menu' />
            <p>Menu</p>
        </NavButton>
        { showMenu ? 
            <NavUnlisted onClick={closeMenu} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <StyledLink to="/">
                <span>{'\u25B6'}</span>
                <p>Home</p>
                </StyledLink>

                { activePage === "about" ? null :
                    <StyledLink to="/my-life">
                    <span>{'\u25B6'}</span>
                    <p>Life</p>
                    </StyledLink>
                }

                { activePage === "skills" ? null :
                    <StyledLink to="/my-skills">
                    <span>{'\u25B6'}</span>
                    <p>Skills</p>
                    </StyledLink>
                }

                { activePage === "projects" ? null :
                    <StyledLink to="/my-projects">
                    <span>{'\u25B6'}</span>
                    <p>Projects</p>
                    </StyledLink>
                }
            </NavUnlisted>
        : null }
        </div>
    );
};

export default PageMenu;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { menuContext } from "../App";
import { useContext } from "react";

import Open from './Images/Open.png'
import Close from './Images/Close.png'

const NavButton = styled.div`
    text-decoration: none;
    margin: 20px;
    display: flex;
    position: fixed;
    bottom: 15px;
    right: 15px;
    height: 125px;
    width: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s ease-out;
    z-index: 998;
    cursor: default;

    p {
        padding: 0
    }

    &:hover {
        transform: translateY(-0.25rem);
    }

    @media (max-width: 768px) {
        height: 125px;
        width: 125px;
        bottom: ${(props) => props.y}px;
        right: ${(props) => props.x}px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.90);
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
    z-index: 999;

    @media (max-width: 768px) {
        bottom: ${(props) => `calc(${props.y}px + 125px + 10px)`};
        right: ${(props) => `${props.x}px`};
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
    /**To hide Active/Current Page from Menu */
    const {activePage} = useContext(menuContext);

    /**To trigger Nav Menu */
    const [showMenu, setShowMenu] = React.useState(false);

    /**For Animation */
    let [menuState, setMenuState] = useState(Close);

    /**For dragging menu on mobile */
    const [position, setPosition] = useState({ x: 15, y: 15 });
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = (e) => {
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const touch = e.touches[0];
        setPosition({
            x: window.innerWidth - touch.clientX - 60, // Adjust to center the button
            y: window.innerHeight - touch.clientY - 60,
        });
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const openMenu = () => {
        setShowMenu(true);
        setMenuState(Open);
    }

    const closeMenu = () => {
        setShowMenu(false);
        setMenuState(Close);
    }

    const toggleMenu = () => {
        menuState === Open ? closeMenu() : openMenu();
    }

    return (
        <div>
            <NavButton onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}
                    x={position.x} y={position.y} onClick={toggleMenu} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <img src={menuState} alt='Page Menu' />
                <p>Menu</p>
            </NavButton>
            { showMenu ? 
                <NavUnlisted 
                    x={position.x} y={position.y} onClick={closeMenu} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
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
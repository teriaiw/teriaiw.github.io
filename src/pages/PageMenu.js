import React, { useState, useRef } from "react";
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
        touch-action: none;
        height: 125px;
        width: 125px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.90);
        bottom: unset;
        right: unset;
        left: 0;
        top: 0;
        transition: none;
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
        bottom: unset;
        right: unset;
        left: 0;
        top: 0;
        transition: none;
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
    const isMobile = window.innerWidth <= 768;
    const buttonRef = useRef(null);
    const offset = useRef({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 15, y: 15 }); // Default starting pos

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        const rect = buttonRef.current.getBoundingClientRect();
            offset.current = {
                x: touch.clientX - rect.left,
                y: touch.clientY - rect.top,
        };
        setDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!dragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.clientX - offset.current.x;
        const y = touch.clientY - offset.current.y;

        // Clamp to viewport
        const maxX = window.innerWidth - 125;
        const maxY = window.innerHeight - 125;

        const clampedX = Math.max(0, Math.min(x, maxX));
        const clampedY = Math.max(0, Math.min(y, maxY));

        buttonRef.current.style.setProperty("--x", `${clampedX}px`);
        buttonRef.current.style.setProperty("--y", `${clampedY}px`);

        setPosition({ x: clampedX, y: clampedY });
    };

    const handleTouchEnd = () => {
        setDragging(false);
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
            <NavButton
                ref={buttonRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={toggleMenu}
                style={isMobile ? { transform: `translate(${position.x}px, ${position.y}px)` } : {}}
                {...(!isMobile && {
                    onMouseEnter: openMenu,
                    onMouseLeave: closeMenu,
                })}
            >
                <img src={menuState} alt='Page Menu' />
                <p>Menu</p>
            </NavButton>
            { showMenu ? 
                <NavUnlisted 
                    onClick={closeMenu}
                    style={isMobile ? { transform: `translate(${position.x}px, ${position.y - 135}px)` } : {}}
                    {...(!isMobile && {
                    onMouseEnter: openMenu,
                    onMouseLeave: closeMenu
                })}>
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
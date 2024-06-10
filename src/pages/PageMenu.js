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
    position: absolute;
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

    &:hover {
        transform: translateY(-0.25rem);
    }
`;

const NavUnlisted = styled.div`
    text-align: center;
    text-decoration: none;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 110px;
    right: 110px;
    background: rgba(255,255,255,0.8);
    border: 3px;
    border-style: dashed;
    border-color: rgb(103,74,41);
    border-radius: 10px;
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

    const openMenu = () => {
        setShowMenu(true);
        setMenuState(Open);
    }

    const closeMenu = () => {
        setShowMenu(false);
        setMenuState(Close);
    }

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
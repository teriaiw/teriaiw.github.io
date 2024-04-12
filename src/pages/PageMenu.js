import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { menuContext } from "../App";
import { useContext } from "react";

const NavButton = styled.div`
    text-decoration: none;
    margin: 20px;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    background: red;
    height: 80px;
    width: 80px;
    border-radius: 3px;
`;

const NavUnlisted = styled.div`
    text-align: center;
    text-decoration: none;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 80px;
    right: 80px;
    background: white;
    border-radius: 3px;
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
    const [showMenu, setShowMenu] = React.useState(false)
    const onClick = () => setShowMenu(!showMenu)

    return (
        <div>
        <NavButton onClick={onClick}/>
        { showMenu ? 
            <NavUnlisted onClick={onClick}>
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
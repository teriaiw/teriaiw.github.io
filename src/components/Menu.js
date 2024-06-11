import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

import { terminalContext } from "../pages/Home";
import { useContext } from "react";

const NavUnlisted = styled.div`
  text-align: center;
  text-decoration: none;
  margin: 20px;
  display: flex;
  flex-flow:row wrap;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  outline: none;
  
  p {
    font-size: 26px;
    padding: 2px 6px;
    margin: 7px;
    border-radius: 10px;
    font-family: "Pixelify Sans";
    color: grey;      
    display: inline;
  }

  span {
    display: none;
  }

  &:focus p {
    margin: 0px;
    color: palevioletred;
    border-style: dashed;
  }

  &:hover p {
    margin: 0px;
    color: palevioletred;
    border-style: dashed;
  }

  &:focus span {
    color: palevioletred;
    display: inline;
  }
  
  &:hover span {
    color: palevioletred;
    display: inline;
  }

  @media only screen and (max-width: 768px) {
    margin: 5px;
  }
`;

function Menu() {
  const {setTerminalMessage} = useContext(terminalContext);

  const defaultMessage = "What are ya waiting for..."

    return (
        <NavUnlisted>
          <StyledLink to="/my-life" 
            onMouseEnter={() => setTerminalMessage("cd teri_life")}
            onMouseLeave={() => setTerminalMessage(defaultMessage)}
            onFocus={() => setTerminalMessage("cd teri_life")}
            onBlur={() => setTerminalMessage(defaultMessage)}
          >
            <span>{'\u25B6'}</span>
            <p>Life</p>
          </StyledLink>

          <StyledLink to="/my-skills"
            onMouseEnter={() => setTerminalMessage("cd teri_skillz")}
            onMouseLeave={() => setTerminalMessage(defaultMessage)}
            onFocus={() => setTerminalMessage("cd teri_skillz")}
            onBlur={() => setTerminalMessage(defaultMessage)}
          >
            <span>{'\u25B6'}</span>
            <p>Skills</p>
          </StyledLink>

          <StyledLink to="/my-projects"
            onMouseEnter={() => setTerminalMessage("cd teri_projects")}
            onMouseLeave={() => setTerminalMessage(defaultMessage)}
            onFocus={() => setTerminalMessage("cd teri_projects")}
            onBlur={() => setTerminalMessage(defaultMessage)}
          >
            <span>{'\u25B6'}</span>
            <p>Projects</p>
          </StyledLink>
        </NavUnlisted>
    );

};

export default Menu;
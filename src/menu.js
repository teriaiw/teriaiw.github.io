import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

import { terminalContext } from "./pages/Home";
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
    font-size: 28px;
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
`;

function Menu() {
  const {setTerminalMessage} = useContext(terminalContext);

  const defaultMessage = "What are ya waiting for..."

    return (
        <NavUnlisted>
          <StyledLink to="/my-life" 
            onMouseEnter={() => setTerminalMessage("come peak into my life")}
            onMouseLeave={() => setTerminalMessage(defaultMessage)}
            onFocus={() => setTerminalMessage("come peak into my life")}
            onBlur={() => setTerminalMessage(defaultMessage)}
          >
            <span>{'\u25B6'}</span>
            <p>Life</p>
          </StyledLink>

          <StyledLink to="/my-skills"
            onMouseEnter={() => setTerminalMessage("all my skillz")}
            onMouseLeave={() => setTerminalMessage(defaultMessage)}
            onFocus={() => setTerminalMessage("all my skillz")}
            onBlur={() => setTerminalMessage(defaultMessage)}
          >
            <span>{'\u25B6'}</span>
            <p>Skills</p>
          </StyledLink>

          <StyledLink to="/my-projects"
            onMouseEnter={() => setTerminalMessage("see what I've done")}
            onMouseLeave={() => setTerminalMessage(defaultMessage)}
            onFocus={() => setTerminalMessage("see what I've done")}
            onBlur={() => setTerminalMessage(defaultMessage)}
          >
            <span>{'\u25B6'}</span>
            <p>Projects</p>
          </StyledLink>
        </NavUnlisted>
    );

};

export default Menu;
import React, { useContext } from "react";
import "./navbar.css";
import Toggle from "../toggle/Toggle";

import { themeContext } from "../../Context";

const NavBar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <header className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <span className="n-toggle">
          <Toggle />
        </span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <a href="#home">
              <li style={{ color: darkMode ? "white" : "black" }}>Home</li>
            </a>
            <a href="#skills">
              <li style={{ color: darkMode ? "white" : "black" }}>Skills</li>
            </a>
            <a href="#experience">
              <li style={{ color: darkMode ? "white" : "black" }}>
                Experience
              </li>
            </a>
            <a href="#projects">
              <li style={{ color: darkMode ? "white" : "black" }}>Projects</li>
            </a>
            <a href="#social">
              <li style={{ color: darkMode ? "white" : "black" }}>Social</li>
            </a>
          </ul>
        </div>
        <a href="#contact">
          <button className="button">Contact</button>
        </a>
      </div>
    </header>
  );
};

export default NavBar;

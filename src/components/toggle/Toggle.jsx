import React from "react";
import "./toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleButton = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={toggleButton}>
      <Moon />
      <Sun />
      <div
        className="toggle-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;

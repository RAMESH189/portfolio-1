import React from "react";
import "./intro.css";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import glasses from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import thumbsUp from "../../img/thumbup.png";
import me from "../../img/me.png";

import FloatingDiv from "../floatingdiv/FloatingDiv";
import { motion } from "framer-motion";

import { useContext } from "react";
import { themeContext } from "../../Context";

const Intro = () => {
  
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <section className="intro-wrapper">
      <div className="intro-left">
        <div className="intro-name">
          <span style={{color: darkMode? 'white': ''}}>Hi, I'am</span>
          <span>Ramesh P R</span>
          <span>
            I am an enthusiastic front end developer with expertise in creating
            responsive and robust UI
          </span>
        </div>
        <button className="button intro-button">Hire me</button>
        <div className="into-logoImg">
          <a
            href="https://github.com/RAMESH189"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramesh-pr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="linkedIn" />
          </a>
          <a
            href="https://www.instagram.com/_ramesh_rajendran_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={me} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glasses} alt=""
        />
        <motion.div
          style={{ top: "-4%", left: "50%" }}
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          style={{ top: "18rem", left: "-5rem" }}
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <FloatingDiv image={thumbsUp} text1="MERN" text2="Stack" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Intro

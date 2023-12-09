import React from "react";
import "./social.css";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Git from "../../img/github.png";
import Glass from "../../img/glasses.png";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <section className="social-wrapper" id="social">
      <motion.div
        className="social-maincir"
        initial={{ rotate: 90 }}
        whileInView={{ rotate: 0 }}
        // viewport={{ margin: "-40px" }}
        transition={{ duration: 5, type: "spring" }}
      >
        <div className="social-circle">
          <a
            href="https://github.com/RAMESH189"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="git" />
          </a>
        </div>
        <div className="social-circle">
          <a
            href="https://www.linkedin.com/in/ramesh-pr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="linkedin" />
          </a>
        </div>
        <div className="social-circle">
          <img src={Glass} alt="emoji" />
        </div>{" "}
        <div className="social-circle">
          <a
            href="https://www.instagram.com/_ramesh_rajendran_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
        <div className="social-backcircle blueCircle"></div>
        <div className="social-backcircle yellowCircle"></div>
      </motion.div>
    </section>
  );
};

export default Social;

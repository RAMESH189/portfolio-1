import NavBar from "./components/navbar/NavBar";
import './App.css'
import Intro  from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Project from "./components/projects/Project";
import Social from "./components/social/Social";
import Footer from './components/footer/Footer';
import Contact from "./components/contact/Contact";

import { useContext } from "react";
import { themeContext } from "./Context";

function App() {

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App"
      style={{
        background: darkMode ? '#293132' : '',
        color: darkMode ? 'white' : ''
      }}
    
    >
      <NavBar />
      <Intro />
      <Skills />
      <Experience />
      <Project />
      <Social />
      <Contact />
      <Footer  />
    </div>
  );
}

export default App;

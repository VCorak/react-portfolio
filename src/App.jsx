import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import "./App.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false); // when to open a menu bar

    return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
            <Intro />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    </div>
  );
}

export default App;

// passing the props to Header, when we click on hamburger(added onClick event) menuOpen class is active and true and running the function setMenuOpen
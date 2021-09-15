import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/contact/Contact";
import "./App.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
            <Intro />
            <Projects />
            <Carousel />
            <Contact />
        </div>
    </div>
  );
}

export default App;

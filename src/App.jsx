import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Carousel from "./components/carousel/Carousel";
import Contact from "./components/contact/Contact";
import "./App.scss"

function App() {
  return (
    <div className="app">
      <Header />
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

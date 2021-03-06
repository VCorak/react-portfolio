import "./Header.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Header({menuOpen, setMenuOpen}) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                  <a href="#intro" className="logo">V>.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+46 7710 764</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>valentinacorak@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                    <a className="pdf-link" href="https://drive.google.com/file/d/1xw7EcOxOUgQpeVnNIY__2TusVrd6YUhc/view?usp=sharing" rel="noopener noreferrer"
                       target="_blank">Resume</a>
                        </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
import "./Header.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Header() {
    return (
        <div className="header">
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
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import "./Menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#aboutMe">About Me</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <div className="itemContainer" >
                    <a className="pdf-link" href="https://drive.google.com/file/d/1xw7EcOxOUgQpeVnNIY__2TusVrd6YUhc/view?usp=sharing" rel="noopener noreferrer"
                       target="_blank">Resume</a>
                </div>
            </ul>
        </div>
    );
}


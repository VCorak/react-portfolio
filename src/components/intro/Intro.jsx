import "./Intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";


export default function Intro() {
    const textRef = useRef(); // referring to some element, like query selector in JS
    useEffect(()=> { // after render use this side-effect textRef properties (callback)
    init(textRef.current,{
        showCursor: true,
        backDelay: 2000,
        backSpeed: 80,
        strings: ["Web Developer"],
    });
     }, []); // empty array dependency- effect's gonna work once after rendering
    return (
        <div className="intro" id="intro">
         <div className="leftIntro">
             <div id="stars"></div>
             <div id="stars2"></div>
             <div id="stars3"></div>

</div>
            <div className="rightIntro">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Valentina Corak</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
                <a href="#aboutMe">
                <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
        );
            }

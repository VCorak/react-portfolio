import "./Intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();
    useEffect(()=> {
    init(textRef.current,{
        showCursor: false,
        strings: ["Web Developer"],
    });
     }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="hoverContainer"></div>
                <div className="imgContainer">
                    <img src="assets/profile2.png" alt=""/>
                </div>

            </div>


            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Valentina Corak</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
                <a href="#projects">
                <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
        );
            }

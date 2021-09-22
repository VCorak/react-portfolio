import "./AboutMe.scss"

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="left">
                <div className="left">
                   <div className="hoverContainer"></div>
                   <div className="imgContainer">
                       <img src="assets/profile4.png" alt="Profile image"/>
                   </div>
               </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <p>Some text about me</p>
                </div>
                <a href="#projects">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}

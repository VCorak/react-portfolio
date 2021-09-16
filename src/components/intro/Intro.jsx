import "./Intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile2.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Valentina Corak</h1>
                    <h3>Junior<span></span></h3>
                </div>
                <a href="#portfolio">
                <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}
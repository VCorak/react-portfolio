import "./AboutMe.scss"

export default function AboutMe() {
    return (
        <div className="aboutMe" id="aboutMe">
            <div className="left">
                   <div className="imgContainer">
                       <img src="assets/profile4.png" alt="Profile"/>
                   </div>
            </div>


            <div className="right">
                <div className="wrapper">
                    <div className="about">
                    <h2>About Me</h2>
                    <p> Hello! My name is Valentina and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I
                        decided to try editing first Hello world page — turns out hacking together a custom divs and h1s taught me a lot about HTML & CSS! But life had another plans for me and...
                        <span>Fast-forward to today,</span> my path started in online course SheCodes where I wrote my first lines of code in JavaScript and React.
                        Realizing I have to learn more and get some internship opportunities I jumped into BeCode bootcamp.
                        And here I am, writing my first portfolio in React, have 20+ projects and exercises behind me and group of people who were there for me when it was "I can never center a div, I give up" moment.
                        <span> Love running, woods and baking cakes. Chocolate cakes. </span>
                        </p>
                </div>
                </div>
                <a href="#projects">
                    <img src="assets/down.png" alt="down arrow" />
                </a>
            </div>
        </div>
    )
}


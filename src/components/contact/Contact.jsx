import "./Contact.scss";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Contact () {
    return (
        <div className="contact" id="contact">
            <div className="contact-wrapper">
                <h4> ✉ Last but not least</h4>
                <h3>Get In Touch</h3>
               <p>"I'm currently looking for new internship opportunities! But my inbox is also open
                   for a chat or suggestion how to make this portfolio page even better!"</p>
                <a className="email-link" href="mailto:valentinacorak@gmail.com" rel="noopener noreferrer"
                   target="_blank">Say Hello</a>


                <div className="wrapper-icons">
                   <div className="icon-container">
                            <a href="https://github.com/VCorak/VCorak" aria-label="GitHub" rel="noopener noreferrer"
                               target="_blank">
                                <AiFillGithub />
                            </a>
                   </div>
                        <div className="icon-container">
                            <a href="linkedin.com/in/valentina-corak-060" aria-label="Linkedin" rel="noopener noreferrer"
                               target="_blank">
                                <AiFillLinkedin />
                            </a>
                        </div>
                    <div className="icon-container">
                        <a href="https://www.instagram.com/valentina_corak" aria-label="Instagram" rel="noopener noreferrer"
                               target="_blank">

                            <AiOutlineInstagram />
                        </a>
                    </div>

                </div>

                <p className="footer">Page made with ❤ REACT, HTML and CSS by Valentina Corak, 2021.</p>

            </div>


        </div>


    )
}


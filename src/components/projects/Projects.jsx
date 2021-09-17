import "./Projects.scss"
import ProjectList from "../projectList/ProjectList";
import {useState} from "react";

export default function Projects() {
const [selected, setSelected] = useState("featured 1")
    const list = [ // active classes on, inactive off
        {
            id: "featured 1",
            title: "Featured 1",
        },
        {
            id: "featured 2",
            title: "Featured 2",
        },
        {
            id: "featured 3",
            title: "Featured 3",
        },
        {
            id: "featured 4",
            title: "Featured 4",
        },
        {
            id: "featured 5",
            title: "Featured 5",
        },
    ]
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <ProjectList title = {item.title}
                                 active = {selected === item.id}
                                 setSelected = {setSelected} /> // for each item return list title
                ))}
            </ul>
            <div className="project-container">
                <div className="project-items">
                    <img src="assets/christmas countdown.png" alt="Christmas countdown clock" />
                    <h3>Christmas Countdown</h3>
                </div>
                <div className="project-items">
                    <img src="assets/christmas countdown.png" alt="Christmas countdown clock" />
                    <h3>Christmas Countdown</h3>
                </div>
                <div className="project-items">
                    <img src="assets/christmas countdown.png" alt="Christmas countdown clock" />
                    <h3>Christmas Countdown</h3>
                </div>
                <div className="project-items">
                    <img src="assets/christmas countdown.png" alt="Christmas countdown clock" />
                    <h3>Christmas Countdown</h3>
                </div>
                <div className="project-items">
                    <img src="assets/christmas countdown.png" alt="Christmas countdown clock" />
                    <h3>Christmas Countdown</h3>
                </div>
                <div className="project-items">
                    <img src="assets/christmas countdown.png" alt="Christmas countdown clock" />
                    <h3>Christmas Countdown</h3>
                </div>
            </div>
        </div>
    )
}
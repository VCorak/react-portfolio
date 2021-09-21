import "./Projects.scss"
import ProjectList from "../projectList/ProjectList";
import {useEffect, useState} from "react";
import { featuredProjects, angularProjects, phpProjects, reactProjects, jsProjects } from "../../data";
import { AiOutlineLink } from "react-icons/ai";

export default function Projects() {
const [selected, setSelected] = useState("featured 1")
 const [data, setData] = useState([]);

    const list = [ // active classes on, inactive off
        {
            id: "Favourite",
            title: "Favourite",
        },
        {
            id: "React",
            title: "React",
        },
        {
            id: "Java Script",
            title: "Java Script",
        },
        {
            id: "OOP",
            title: "OOP",
        },
        {
            id: "PHP",
            title: "PHP",
        },
    ]

    useEffect(() => {
switch (selected) {
    case "favourite":
        setData(featuredProjects);
        break;
    case "React":
        setData(reactProjects);
        break;
    case "Java Script":
        setData(jsProjects);
        break;
    case "OOP":
        setData(angularProjects);
        break;
    case "PHP":
        setData(phpProjects);
        break;
    default:
        setData(featuredProjects);

}
    }, [selected])
    
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <ProjectList title = {item.title}
                                 active = {selected === item.id}
                                 setSelected = {setSelected}
                                 id = {item.id} /> // for each item return list title
                ))}
            </ul>
            <div className="project-container">
                {data.map((data) => (
                    <div className="project-items">
                        <img src={data.img} alt="{data.link}" />
                        <h3>{data.title}</h3>
                        <div className="link-icon">
                           <a href={data.link} rel="noopener noreferrer"
                              target="_blank">
                            <AiOutlineLink />
                           </a>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}
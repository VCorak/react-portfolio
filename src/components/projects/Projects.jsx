import "./Projects.scss"
import ProjectList from "../projectList/ProjectList";
import {useEffect, useState} from "react";
import { featuredProjects, angularProjects, phpProjects, reactProjects, jsProjects } from "../../data";

export default function Projects() {
const [selected, setSelected] = useState("featured 1")
 const [data, setData] = useState([]);

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

    useEffect(() => {
switch (selected) {
    case "featured 1":
        setData(featuredProjects);
        break;
    case "featured 2":
        setData(reactProjects);
        break;
    case "featured 3":
        setData(jsProjects);
        break;
    case "featured 4":
        setData(angularProjects);
        break;
    case "featured 5":
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
                        <img src={data.img} alt="Christmas countdown clock" />
                        <h3>{data.title}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}
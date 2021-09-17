import "./Projects.scss"
import ProjectList from "../projectList/ProjectList";

export default function Projects() {

    const list = [
        {
            id: "featured 1",
            title: "Featured",
        },
        {
            id: "featured 2",
            title: "Featured",
        },
        {
            id: "featured 3",
            title: "Featured",
        },
        {
            id: "featured 4",
            title: "Featured",
        },
        {
            id: "featured 5",
            title: "Featured",
        },
    ]
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <ProjectList title={item.title} />
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
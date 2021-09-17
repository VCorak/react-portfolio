import "./Projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                <li className="active">Featured 1</li>
                <li>Featured 2</li>
                <li>Featured 3</li>
                <li>Featured 4</li>
                <li>Featured 5</li>
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
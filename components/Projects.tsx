import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <section className="introduction">
            <div
                className="container-body"
                id="main-content"
            >
                <h1 className="page-heading white-font" >
                    Projects
                </h1>
                <div className="project-grid">
                    {
                        projects.map((proj, i) => (
                            <ProjectItem
                                image={proj.image}
                                title={proj.title}
                                subtitle={proj.subtitle}
                                description={proj.description}
                                techstack={proj.techstack}
                                repo_url={proj.repo_url}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Projects;
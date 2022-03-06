import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";
import Modal from 'react-modal';
import { useRouter } from "next/router";
import ProjectDetails from "./ProjectDetails";

const ModalStyle = {
    content: {
        // centering-the-div
        top: '55%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

        maxWidth: '1100px',
        height: '600px',
        backgroundColor: '#FFF',
        borderWidth: 0,
        borderRadius: 5
    },
    overlay: {
        backgroundColor: '#00000075'
    }
};

Modal.setAppElement('#__next');

const Projects = () => {

    const router = useRouter()

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
                                keyProp={i}
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
            <Modal
                style={ModalStyle}
                isOpen={!!router.query.project}
                onRequestClose={() => router.push('/projects')}
                closeTimeoutMS={250}
            >
                <ProjectDetails
                    project={projects.filter((p) => p.title === router.query.project)[0]}
                    style={{
                        color: "#000",
                    }}
                />
            </Modal>
        </section>
    );
};

export default Projects;
import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";
import Modal from 'react-modal';
import Link from "next/link";
import { useRouter } from "next/router";

const ModalStyle = {
    content: {
        // centering-the-div :trolley:
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

        maxWidth: '1100px',
        height: '700px',
        backgroundColor: '#FFF',
        borderWidth: 0
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
                            <Link
                                href={`projects/?project=${proj.title.toLowerCase()}`}
                                as={`/projects/${proj.title.toLowerCase()}`}
                            >
                                <a>
                                    <ProjectItem
                                        keyProp={i}
                                        image={proj.image}
                                        title={proj.title}
                                        subtitle={proj.subtitle}
                                        description={proj.description}
                                        techstack={proj.techstack}
                                        repo_url={proj.repo_url}
                                    />
                                </a>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <Modal
                style={ModalStyle}
                // className="modal"
                // overlayClassName="modalOverlay"
                isOpen={!!router.query.project}
                onRequestClose={() => router.push('/projects')}
            >
                <div>This is a modal</div>
            </Modal>
        </section>
    );
};

export default Projects;
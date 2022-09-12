import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";
import Modal from "react-modal";
import { useRouter } from "next/router";
import ProjectDetails from "./ProjectDetails";

const ModalStyle = {
  content: {
    top: "55%",
    bottom: "55%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

    maxWidth: "1100px",
    height: "650px",
    backgroundColor: "#414141",
    borderWidth: 0,
    borderRadius: 5,
  },
  overlay: {
    backgroundColor: "#00000075",
  },
};

Modal.setAppElement("#__next");

const Projects = () => {
  const router = useRouter();

  return (
    <section className="py-4 bg-primary-main text-gray-200 relative my-5">
      <div className="max-w-[900px] my-4 mx-auto py-0 px-6" id="main-content">
        <h1 className="page-heading text-white">Projects</h1>
        <div className="project-grid">
          {projects.map((proj, i) => (
            <ProjectItem
              keyProp={i}
              image={proj.image}
              title={proj.title[0].toUpperCase() + proj.title.substring(1)}
              subtitle={proj.subtitle}
              description={proj.description}
              techstack={proj.techstack}
              repo_url={proj.repo_url}
            />
          ))}
        </div>
      </div>
      <Modal
        style={ModalStyle}
        isOpen={!!router.query.project}
        onRequestClose={() => router.push("/projects")}
        closeTimeoutMS={250}
      >
        <ProjectDetails
          project={projects.filter((p) => p.title === router.query.project)[0]}
          style={{
            color: "#F0F0F0",
          }}
        />
      </Modal>
    </section>
  );
};

export default Projects;

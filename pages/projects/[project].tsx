import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import ProjectDetails from "../../components/ProjectDetails";
import { projects } from "../../data/projects";
import {
  currentLocation,
  makeDayTimeString,
} from "../../helper/helperFunctions";

const projectPage = () => {
  const router = useRouter();
  const { project } = router.query;

  const projectData = projects.filter((p) => p.title === project)[0];

  return (
    <div>
      <Navbar />
      <section className="introduction">
        <div className="container-body" id="main-content">
          {projectData && (
            <ProjectDetails project={projectData} style={{ color: "#fff" }} />
          )}
        </div>
      </section>
    </div>
  );
};

export default projectPage;

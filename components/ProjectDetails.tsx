import Image from "next/image";
import {
  faGooglePlay,
  faApple,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ProjectDetailsProps {
  project: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    techstack: Array<String>;
    repo_url: string;
    media: string;
  };
  style: {
    color: string;
  };
}

const ProjectDetails = ({ project, style }: ProjectDetailsProps) => {
  console.log(project);

  const links = [
    {
      icon: faGithub,
      link: project ? project.repo_url : "",
    },
    {
      icon: faGooglePlay,
      link: project
        ? project.title === "aushadhalay"
          ? "https://play.google.com/store/apps/details?id=com.aush.aush.prod"
          : ""
        : "",
    },
    {
      icon: faApple,
      link: "",
    },
    {
      icon: faExternalLink,
      link: "",
    },
  ];

  return (
    <div
      style={{
        // width: "100%",
        // padding: 20,
        color: style.color,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {project && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth > 768 ? "row" : "column",

              //   alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: 10,
                height: window.innerWidth > 768 ? 250 : 350,
                width: window.innerWidth > 768 ? 250 : 350,
                overflow: "hidden",
              }}
            >
              <Image
                src={project.image}
                height={window.innerWidth > 768 ? 250 : 350}
                width={window.innerWidth > 768 ? 250 : 350}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: window.innerWidth > 768 ? 50 : 0,
              }}
            >
              <h1 style={{ fontSize: 45 }}>
                {project.title[0].toUpperCase() + project.title.substring(1)}
              </h1>
              <span>{project.subtitle}</span>
              <div
                style={{
                  // display: "flex",
                  alignItems: "center",
                  // padding: 1,
                  marginRight: 10,
                  marginTop: 30,
                }}
              >
                <span
                  style={{
                    display: "flex",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                  }}
                >
                  Links
                </span>
                {links &&
                  links
                    .filter((link) => link.link.length > 0)
                    .map((link, index) => (
                      <a href={link.link} key={index}>
                        <div
                          style={{
                            display: "flex",
                            width: 35,
                            height: 35,
                            borderRadius: 35 / 2.0,
                            background: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#FFF",
                            marginRight: 10,
                            padding: 10,
                            backgroundColor: "#000",
                            // boxShadow: "1px 1px 25px #ccc",
                          }}
                        >
                          <FontAwesomeIcon icon={link.icon} size="sm" />
                        </div>
                      </a>
                    ))}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 20,
              background: "#2E2E2E",
              borderRadius: 5,
            }}
          >
            <span
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Description
            </span>
            <p
              style={{
                fontSize: 16,
                fontWeight: "normal",
              }}
            >
              {project.description}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 10,
              // background: "#2E2E2E",
              marginTop: 10,
              // borderRadius: 5
            }}
          >
            <span
              style={{
                display: "flex",
                margin: "0px 0 10px 0",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Tech Stack
            </span>
            <div
              style={{
                display: "flex",
                margin: "10px 0 10px 0",
              }}
            >
              {project.techstack.map((tech) => (
                <div
                  style={{
                    display: "flex",
                    width: window.innerWidth > 768 ? 135 : 35,
                    height: 35,
                    borderRadius: 17.5,
                    background: "#fff",
                    justifyContent: "space-around",
                    alignItems: "center",
                    color: "#000",
                    marginRight: window.innerWidth > 768 ? 10 : 20,
                    padding: 10,
                  }}
                >
                  <img
                    src={`/images/logos/${tech
                      .trim()
                      .split(" ")
                      .map((t) => t.toLowerCase())
                      .join("")
                      .trim()}.png`}
                    alt={tech
                      .trim()
                      .split(" ")
                      .map((t) => t.toLowerCase())
                      .join("")
                      .trim()}
                    width={25}
                    height={25}
                  />
                  {window.innerWidth > 768 && (
                    <span
                      style={{
                        fontWeight: "normal",
                        fontSize: 14,
                      }}
                    >
                      {tech}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;

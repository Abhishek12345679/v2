import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface ProjectItemProps {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    techstack: Array<String>;
    repo_url: string;
    media?: string
}

const ProjectItem = (props: ProjectItemProps) => {
    return (
        <article className="project-item">
            <div className="card">
                <Image
                    className="pos-absolute"
                    src={props.image}
                    width={200}
                    height={200}
                    priority
                />
                <div className="gradient"></div>
            </div>
            <div className="margin-left-5">
                <p>{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>
            <div className="social-icon">
                {props.repo_url && <a
                    href={props.repo_url}
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                    />
                </a>}

            </div>
        </article>
    );
};

export default ProjectItem;
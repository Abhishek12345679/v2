import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
    keyProp: number;
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
        <article
            key={props.keyProp}
            className="project-item"
        >
            <Link
                href={`projects/?project=${props.title.toLowerCase()}`}
                as={`/projects/${props.title.toLowerCase()}`}
            >
                <a>
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
                </a>
            </Link>
            <div className="margin-left-5">
                <p>{props.title}</p>
                <p className="subtitle">{props.subtitle}</p>
            </div>
            <div className="social-icon">
                {props.repo_url &&
                    <a
                        href={props.repo_url}
                        target="_blank"
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
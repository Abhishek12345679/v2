import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export interface ThanksItemProps {
    key: number;
    image: string;
    title: string;
    subtitle: string;
    repo_url?: string;
    external_url: string;
    twitter_url: string;
    instagram_url?: string;
    github_url: string;
    linkedin_url?: string;
    email: string;
    inspo?: string;
}

const ThanksItem = (props: ThanksItemProps) => {
    return (
        <article
            key={props.key}
            className="project-item">
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
                <div className="flex">
                    <p>{props.title}</p>
                    <a
                        target="_blank"
                        className="margin-left-10"
                        href={props.external_url}
                    >
                        <FontAwesomeIcon
                            icon={faExternalLink}
                            size="sm"
                        />
                    </a>
                </div>
                <p className="subtitle">{props.subtitle}</p>
            </div>
            <div className="social-icon">
                <a
                    href={props.repo_url}
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                    />
                </a>
            </div>
        </article>
    );
};

export default ThanksItem;
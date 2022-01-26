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
                />
                <div className="gradient"></div>
            </div>
            <p>{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
        </article>
    );
};

export default ProjectItem;
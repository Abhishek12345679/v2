import Image from 'next/image'
export interface ProjectDetailsProps {
    project: {
        image: string;
        title: string;
        subtitle: string;
        description: string;
        techstack: Array<String>
        repo_url: string;
        media: string;
    },
    style: {
        color: string,
    }
}

const ProjectDetails = ({ project, style }: ProjectDetailsProps) => {
    return (
        <div
            style={
                {
                    padding: 20,
                    color: style.color ?? "#000",
                }
            }
        >
            {project &&
                <>
                    <Image
                        src={project.image}
                        height={150}
                        width={150}
                    />
                    <h1>
                        {project.title[0].toUpperCase() + project.title.substring(1)}
                    </h1>
                    <h2>
                        {project.subtitle}
                    </h2>
                    <pre>
                        {project.description}
                    </pre>
                    <h2>Tech</h2>
                    {project.techstack.map((ts) => <li>{ts}</li>)}
                </>
            }
        </div >
    )
}

export default ProjectDetails
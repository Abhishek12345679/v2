import Image from 'next/image'
import React from 'react'

export interface ProjectDetailsProps {
    project: {
        image: string;
        title: string;
        subtitle: string;
        description: string;
        techstack: Array<String>
        repo_url: string;
        media: string;
    }
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return (
        <div style={{ padding: 20 }}>
            {project &&
                <>
                    <Image
                        src={project.image}
                        height={150}
                        width={150}
                    />
                    <h1 style={{ color: 'white' }}>
                        {project.title[0].toUpperCase() + project.title.substring(1)}
                    </h1>
                    <h2 className='white-font'>
                        {project.subtitle}
                    </h2>
                    <p className='white-font'>
                        {project.description}
                    </p>
                    {project.techstack.map((ts) => <li className='white-font'>{ts}</li>)}
                </>
            }
        </div>
    )
}

export default ProjectDetails
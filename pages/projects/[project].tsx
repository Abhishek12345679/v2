import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar';
import ProjectDetails from '../../components/ProjectDetails';
import { projects } from '../../data/projects';
import { currentLocation, makeDayTimeString } from '../../helper/helperFunctions';

const projectPage = () => {
    const router = useRouter()
    const { project } = router.query;

    const projectData = projects.filter((p) => p.title === project)[0]

    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            {projectData &&
                <ProjectDetails
                    project={projectData}
                />
            }
        </div>
    )
}

export default projectPage
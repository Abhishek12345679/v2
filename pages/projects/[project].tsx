import { useRouter } from 'next/router'
import React from 'react'

const projectPage = () => {
    const router = useRouter()
    const { project } = router.query;

    return (
        <div>
            {project}
        </div>
    )
}

export default projectPage
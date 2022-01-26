import { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import { currentLocation, makeDayTimeString } from "../helper/helperFunctions"

const projects: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <Navbar
                currentLocation={currentLocation}
                dayTimeString={makeDayTimeString()}
            />
            <Projects />
        </div>
    )
}

export default projects

import { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
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
            <div className="container-body" id="main-content">
                <h1 className="page-heading white-font" >
                    Projects
                </h1>
            </div>
        </div>
    )
}

export default projects

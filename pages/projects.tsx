import Navbar from "../components/Navbar"
import { currentLocation, makeDayTimeString } from "../helper/helperFunctions"

const projects = () => {

    return (
        <div>
            <Navbar currentLocation={currentLocation} dayTimeString={makeDayTimeString()} />
            <div className="container-body">
                <p className="white-font">Projects</p>
            </div>
        </div>
    )
}

export default projects

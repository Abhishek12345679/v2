import Navbar from "../components/Navbar"
import { currentLocation, makeDayTimeString } from "../helper/helperFunctions"

const projects = () => {

    return (
        <div>
            <Navbar currentLocation={currentLocation} dayTimeString={makeDayTimeString()} />
            <div>
                projects
            </div>
        </div>
    )
}

export default projects

import Navbar from "../components/Navbar"
import { currentLocation, makeDayTimeString } from "../helper/helperFunctions"

const about = () => {
    return (
        <div>
            <Navbar currentLocation={currentLocation} dayTimeString={makeDayTimeString()} />

            <div>
                About
            </div>
        </div>
    )
}

export default about

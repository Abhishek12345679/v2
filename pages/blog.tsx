import Navbar from "../components/Navbar"
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const blog = () => {
    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            <div className="container-body">
                <p className="white-font">blog</p>
            </div>
        </div>
    )
};

export default blog

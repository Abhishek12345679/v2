import Navbar from "../components/Navbar"
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const blog = () => {
    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            <div className="container-body">
                <h1 className="page-heading white-font">
                    Blog
                </h1>
            </div>
        </div>
    )
};

export default blog

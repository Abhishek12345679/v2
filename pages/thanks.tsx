import Navbar from "../components/Navbar";
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const thanks = () => {
    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            <div className="container-body" id="main-content">
                <p className="white-font">thanks</p>
            </div>
        </div>
    );
};

export default thanks;


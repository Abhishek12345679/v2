import Navbar from "../components/Navbar";
import Thanks from "../components/Thanks";
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const thanks = () => {
    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            <Thanks />
        </div>
    );
};

export default thanks;


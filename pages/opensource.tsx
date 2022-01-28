import Navbar from "../components/Navbar";
import ThanksSegmentedControl from "../components/ThanksSegmentedControl";
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const opensource = () => {
    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            <ThanksSegmentedControl />
        </div>
    );
};

export default opensource;
import Navbar from "../components/Navbar"
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const blog = () => {
    return (
        <div>
            <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
            <section className="introduction">
                <div className="container-body" id="main-content">
                    <h1 className="page-heading white-font">
                        Blog
                    </h1>
                </div>

            </section>
        </div>
    )
};

export default blog

import Navbar from "../components/Navbar";
import ThanksSegmentedControl from "../components/ThanksSegmentedControl";
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const opensource = () => {
  return (
    <div>
      <Navbar />
      <ThanksSegmentedControl />
      <section className="py-4 bg-primary-main text-gray-200 relative my-5">
        <div
          className="max-w-[900px] my-4 mx-auto py-0 px-6"
          id="main-content"
          style={{ textAlign: "center" }}
        >
          <span style={{ color: "#fff" }}>coming soon!</span>
        </div>
      </section>
    </div>
  );
};

export default opensource;

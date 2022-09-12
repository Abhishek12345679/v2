import Navbar from "../components/Navbar";
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const blog = () => {
  return (
    <div>
      <Navbar />
      <section className="py-4 bg-primary-main text-gray-200 relative my-5">
        <div className="max-w-[900px] my-4 mx-auto py-0 px-6" id="main-content">
          <h1 className="page-heading text-white">Blog</h1>
        </div>
      </section>
    </div>
  );
};

export default blog;

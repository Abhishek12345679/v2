import Navbar from "../components/Navbar";
import ThanksSegmentedControl from "../components/ThanksSegmentedControl";

const opensource = () => {
  return (
    <div>
      <Navbar />
      <ThanksSegmentedControl />
      <section className="introduction">
        <div
          className="container-body"
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

import Navbar from "../components/Navbar";
import ThanksItem from "../components/ThanksItem";
import ThanksSegmentedControl from "../components/ThanksSegmentedControl";
import { inspirations } from "../data/inspirations";
import { makeDayTimeString, currentLocation } from "../helper/helperFunctions";

const inspiration = () => {
  return (
    <div>
      <Navbar
        dayTimeString={makeDayTimeString()}
        currentLocation={currentLocation}
      />
      <ThanksSegmentedControl />
      <section className="introduction">
        <div className="container-body" id="main-content">
          <h3 className="bold">
            Thank you to these developers/designers for making such cool
            websites
          </h3>
          <div className="project-grid">
            {inspirations.map((insp: any, index: number) => (
              <ThanksItem
                key={index}
                external_url={insp.external_url}
                image={insp.image}
                email={insp.email}
                title={insp.title}
                subtitle={insp.subtitle}
                twitter_url={insp.twitter_url}
                instagram_url={insp.instagram_url}
                github_url={insp.github_url}
                repo_url={
                  insp.repo_url === "" ? insp.github_url : insp.repo_url
                }
                linkedin_url={insp.linkedin_url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default inspiration;

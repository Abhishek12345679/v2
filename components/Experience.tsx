import { experiences } from "../data/experiences";
import { ExperienceListItem } from "./ExperienceListItem";

export const Experience = () => {
    return (
        <section className="introduction margin-vert-20">
            <div className="container-body">
                <h2 className="white-font">Experience</h2>
                <div className="margin-left-5">
                    {
                        experiences
                            .map((exp, i) => (
                                <ExperienceListItem
                                    keyProp={i}
                                    position={exp.position}
                                    duration={exp.duration}
                                    organisation={exp.organisation}
                                    description={exp.description}
                                    techstack={exp.techstack.map((tech, i) => i === exp.techstack.length - 1 ? tech.concat(".") : tech.concat(", "))}
                                />
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

import { experiences } from "../data/experiences";
import { ExperienceListItem } from "./ExperienceListItem";

export const Experience = () => {
    return (
        <section className="introduction margin-vert-10">
            <div className="container-body">
                <h2 className="white-font">Experience</h2>
                {
                    experiences
                        .map((exp, i) => (
                            <ExperienceListItem
                                position={exp.position}
                                duration={exp.duration}
                                organisation={exp.organisation}
                                description={exp.description}
                                techstack={exp.techstack}
                            />
                        ))
                }
            </div>

        </section>
    );
};

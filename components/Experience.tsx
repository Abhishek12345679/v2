import { experiences } from "../data/experiences";
import { ExperienceListItem } from "./ExperienceListItem";

export const Experience = () => {
    return (
        <div className="container-body">
            <h2 className="white-font">Experiences</h2>
            {
                experiences
                    .map((exp, i) => (
                        <ExperienceListItem
                            position={exp.position}
                            duration={exp.duration}

                        />
                    ))
            }
        </div>
    );
};

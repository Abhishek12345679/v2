/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { experiences } from "../data/experiences";
import { ExperienceListItem } from "./ExperienceListItem";

export const Experience = () => {
  return (
    <section className="relative my-5 bg-primary-main py-4 text-gray-200">
      <div className="my-4 mx-auto max-w-[900px] py-0 px-6">
        <h1
          className="ml-[100px] text-white "
          css={css`
            @media (max-width: 1000px) {
              margin-left: 10px;
            }
          `}
        >
          Experience
        </h1>
        <div className="margin-left-5 flex w-full flex-row">
          <div
            className="my-7 mr-7 ml-0 flex w-[30%] items-center justify-end"
            css={css`
              @media (max-width: 1000px) {
                display: none;
              }
            `}
          >
            <div className="h-full w-[1px] rounded-[20px] bg-white opacity-20" />
          </div>

          {experiences.map((exp, i: number) => (
            <div
              css={css`
                top: ${i * 300}px;
                @media (max-width: 1000px) {
                  display: none;
                }
              `}
              className="absolute mt-32 flex h-[300px] w-[12%] flex-row justify-between"
            >
              <span
                css={css`
                  font-weight: bold;
                  text-align: center;
                  font-size: 14px;
                  margin-right: 0px;
                  left: 0;
                  width: 60%;
                `}
              >
                {exp.duration}
              </span>
            </div>
          ))}
          <div>
            {experiences.map((exp, i: number) => (
              <ExperienceListItem
                keyProp={i}
                position={exp.position}
                duration={exp.duration}
                organisation={exp.organisation}
                description={exp.description}
                techstack={exp.techstack.map((tech, i) =>
                  i === exp.techstack.length - 1
                    ? tech.concat(".")
                    : tech.concat(", ")
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

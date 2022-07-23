/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { experiences } from "../data/experiences";
import { ExperienceListItem } from "./ExperienceListItem";

export const Experience = () => {
  return (
    <section className="introduction margin-vert-20">
      <div className="container-body">
        <h1
          className="white-font"
          css={css`
            /* text-align: center; */
            margin-left: 100px;
            @media (max-width: 1000px) {
              margin-left: 10px;
            }
          `}
        >
          Experience
        </h1>
        <div
          className="margin-left-5"
          css={css`
            display: flex;
            width: 100%;
            flex-direction: row;
          `}
        >
          <div
            css={css`
              width: 30%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              margin: 30px 30px 30px 0;
              @media (max-width: 1000px) {
                display: none;
              }
            `}
          >
            <div
              css={css`
                height: 100%;
                width: 1px;
                background-color: white;
                border-radius: 20px;
                opacity: 0.2;
              `}
            />
          </div>
          {experiences.map((exp, i: number) => (
            <div
              css={css`
                position: absolute;
                height: 300px;
                /* border: 1px solid red; */
                width: 12%;
                margin-top: 8em;
                top: ${i * 300}px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                @media (max-width: 1000px) {
                  display: none;
                }
                /* border: 1px solid red; */
              `}
            >
              <span
                css={css`
                  font-weight: bold;
                  text-align: center;
                  font-size: 14px;
                  margin-right: 0px;
                  left: 0;
                  width: 60%;
                  /* border: 1px solid red; */
                `}
              >
                {exp.duration}
              </span>
              <div
                css={css`
                  width: 20px;
                  height: 20px;
                  border-radius: 10px;
                  background-color: ${exp.color};
                  /* border: 1px solid red; */
                `}
              />
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

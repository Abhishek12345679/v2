/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const ExperienceListItem = (props: any) => {
  return (
    <section
      className="flex h-[300px] flex-col border border-slate-800"
      key={props.keyProp}
    >
      <div className="flex w-full items-center justify-between leading-[0.8]">
        <div>
          <p className="text-white">{props.position}</p>
          <p className="mb-6 text-gray-300">{props.organisation}</p>
        </div>
        <p
          className="mb-6 text-gray-300"
          css={css`
            @media (min-width: 1000px) {
              display: none;
            }
          `}
        >
          {props.duration}
        </p>
      </div>
      <ul>
        {props.description.map((item: string, index: number) => (
          <li key={index} className="relative my-2 mx-0 pl-5 text-xs">
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <p className="mb-6 text-gray-300">
          Tech stack used: {props.techstack}{" "}
        </p>
      </div>
    </section>
  );
};

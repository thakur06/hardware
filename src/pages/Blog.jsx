import React from "react";
import { Code } from "../components/Code";
import { code } from "../Code";

export const Blog = () => {
  return (
    <div className="p-5 font-serif">
      <h1
        className="text-2xl md:text-3xl md:max-w-xl mt-10 mb-5"
        style={{ fontFamily: "incognito" }}
      >
        Blog
      </h1>
      <p>
        Key this is place,I share insights, code snippets, and experiences
        from my journey in software development. I cover a wide range of topics,
        from coding best practices to personal projects.
      </p>
      <div className="flex flex-col gap-10 w-full mt-10">
        {code.map((data, index) => (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-5`}
          >
            <Code
              language={data.language}
              code={data.code}
              text={data.text}
              duration={data.date}
              idx={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

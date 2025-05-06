import React, { useState, useEffect } from "react";
import { CodeBlock, tomorrowNightEighties } from "react-code-blocks";

export const Code = ({ code, language, text, duration, idx }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Determine if idx is even or odd
  const isEven = idx % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row w-screen  items-center gap-2 font-serif p-2 justify-between${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
      style={{ animation: isVisible ? "fadeIn 0.7s ease-out forwards" : "none" }}
    >
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
              -webkit-transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              -webkit-transform: translateY(0);
            }
          }

          /* Override CodeBlock internal padding and margin */
          .code-block-container pre,
          .code-block-container code {
            padding: 0 !important;
            margin: 0 !important;
          }
        `}
      </style>

      {/* Text Section */}
      <div
        className={`flex flex-col ${code?"md:w-[50%]":"w-full "} w-full md:h-90  md:text-left p-1 m-0${
          isEven ? "order-1" :"order-2 md:order-2"
        }`}
      >
        <div className="flex md:flex-row justify-between"> <h1 className="text-md font-semibold  font-serif">
         <span className="text-gray-500 text-3xl p-2">#</span> {text}
        </h1>
        <small className="text-gray-400">{duration}</small></div>
       
      </div>

      {/* Code Section */}
{  code && <div
    className={`md:w-[50%] w-full h-90 overflow-y-scroll rounded-md scrollbar-hide p-1 m-0 ${
      isEven && code ? "order-2" : "order-1 md:order-1"
    }`}
  >
    <div className="code-block-container" style={{fontFamily:"incognito"}}>
      <CodeBlock
        text={code}
        language={language || "javascript"}
        showLineNumbers
        theme={tomorrowNightEighties}
        wrapLines
      />
    </div>
  </div>}
    </div>
  );
};
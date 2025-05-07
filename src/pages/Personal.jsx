import React, { useState, useEffect } from "react";
import { sheet } from "../Sheet";
import { FaAnglesRight, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";

export const Personal = () => {
  // Group problems by topic
  const [groupedByTopic, setGroupedByTopic] = useState({});
  const [openTopics, setOpenTopics] = useState({});

  useEffect(() => {
    // Group the sheet data by topics
    const grouped = sheet.reduce((acc, item) => {
      // Default to "Array" if no topic is specified
      const topic = item.topic || "Array";
      
      if (!acc[topic]) {
        acc[topic] = [];
      }
      acc[topic].push(item);
      return acc;
    }, {});
    
    setGroupedByTopic(grouped);
    
    // Initialize all topics as closed
    const initialOpenState = Object.keys(grouped).reduce((acc, topic) => {
      acc[topic] = false;
      return acc;
    }, {});
    
    setOpenTopics(initialOpenState);
  }, []);

  // Toggle dropdown for a specific topic
  const toggleTopic = (topic) => {
    setOpenTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <div className="p-5">
      <h1 className='text-2xl md:text-3xl' style={{fontFamily:"incognito"}}>DSA Sheet Striver</h1>
      
      <div className="mt-5">
        {Object.keys(groupedByTopic).map((topic) => (
          <div key={topic} className="mb-4  rounded-lg shadow-md">
            <div 
              className="flex justify-between items-center p-3 cursor-pointer rounded-t-lg"
              onClick={() => toggleTopic(topic)}
            >
              <h2 className="text-lg font-semibold">{topic}</h2>
              {openTopics[topic] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            
            {openTopics[topic] && (
              <ul className="p-3 font-serif pl-3">
                {groupedByTopic[topic].map((data, index) => (
                  <li key={index} className="mb-2">
                    <div className="flex flex-row items-center gap-2">
                      <FaAnglesRight className="text-gray-500 flex-shrink-0" /> 
                      <span className="flex-grow">{data.name}</span>
                      
                      <div className="flex items-center gap-2">
                        <small className={data.status === "completed" ? "text-green-500 capitalize bg-green-100 px-2 py-0.5 rounded-full text-xs" : "text-red-500 capitalize bg-red-100 px-2 py-0.5 rounded-full text-xs"}>
                          {data.status || "pending"}
                        </small>
                        
                        {data.icon && (
                          <a 
                            href={data.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            link
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
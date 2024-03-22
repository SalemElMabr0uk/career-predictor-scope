//lofinFlow 
"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Choices } from '../_const/choices';



const LoginFlow: React.FC = () => {
  const [showFullMainLine, setShowFullMainLine] = useState(false);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  const toggleMainLine = () => {
    setShowFullMainLine(!showFullMainLine);
  };

  // Function to select a random choice
  const selectRandomChoice = () => {
    const index = Math.floor(Math.random() * Choices.length);
    setRandomIndex(index);
  };

  useEffect(() => {
    selectRandomChoice();
  }, []);


  return (
    <>
      <div className='grid p-5 m-5 '>
        <h1 className='bg-gradient-to-r text-6xl text-center font-bold from-pink-300 via-orange-500 to-pink-200 inline-block text-transparent bg-clip-text'>
          WELCOME WITH ROADMAPS
        </h1>
        <h3 className='text-white  text-center p-4 m-4 '>With Roadmap you can be precise with your journey.</h3>
      </div>

      {/* Random choices  when the component mounts or updates*/}
      <div className="p-6 m-2  rounded-md">
        {randomIndex !== null && (
          <div className="flex overflow-hidden shadow-md">
            <div className="w-1/2 bg-gradient-to-br p-4 ">
        {/*title*/}
              <h2 className="text-3xl font-semibold p-2 m-6  text-white">{Choices[randomIndex].title}</h2>
        {/*mainline  % length*/}
              <p className="text-white p-6 m-2">
                {showFullMainLine ? Choices[randomIndex].pageContent.mainLine : `${Choices[randomIndex].pageContent.mainLine.slice(0, 115)}..`}
              </p>
              {Choices[randomIndex].pageContent.mainLine.length > 0 && (
                <div className="flex flex-wrap p-2">
                  <Link href={`/dynamiccontent/${Choices[randomIndex].id}`} prefetch={false}>
                    <button className="text-black bg-gradient-to-br p-2 m-6 mt-0 from-pink-200 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 " onClick={toggleMainLine}>
                      {showFullMainLine ? 'Know Less' : 'Know more'}
                    </button>
                  </Link>
                </div>
              )}
           </div> 
            <div className="w-1/2">
              <Link href={`/dynamiccontent/${Choices[randomIndex].id}`} prefetch={false}>
                <div >
                  <video controls className="w-400 h-450">
                    <source src={Choices[randomIndex].videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>            
              </Link>
            </div>
          </div>
        )}
      </div>


   

      <h2 className='text-white text-center text-4xl p-8 m-6 font-bold lg:text-3 hover:scale-105'> Explore More </h2>

      
      <div className="overflow-x-auto w-full p-2 hover:shadow-lg ">
        <div className="flex flex-nowrap justify-start w-[2200px]">
          {Choices.map((item, index) => (
            <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 bg-[#94a3b8] bg-opacity-60 rounded-lg shadow-md p-6 dev transform transition-transform hover:scale-105 ">
              <Link href={`/dynamiccontent/${item.id}`} prefetch={false}>
                <h2 className="text-xl font-semibold text-center mt-2 p-4">{item.title}</h2>
                <div className='p-2 w-400 h-400'> <img src={item.image} alt={`${item.title} image`} className="w-400 h-400 object-cover mb-2 rounded" /></div>

                <p>{showFullMainLine ? item.pageContent.mainLine : `${item.pageContent.mainLine.slice(0, 100)}...`}</p>
                {item.pageContent.mainLine.length > 0 && (
                  
                  <div className='flex flex-wrap p-2'> 
                    <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 " onClick={toggleMainLine}>
                      {showFullMainLine ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
      

      



    </>
  );
};

export default LoginFlow;



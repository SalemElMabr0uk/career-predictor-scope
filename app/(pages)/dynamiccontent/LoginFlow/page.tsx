"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Choices } from '../_const/choices';



const LoginFlow: React.FC = () => {
  //
  const [showFullMainLine] = useState(false);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);


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

      <div className='flex justify-center  inset-0'>
        <button onClick={() => setIsDialogOpen(true)} className="text-white bg-gradient-to-br from-[#312e81] to-[#a5b4fc] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pin font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2">
          How Roadmap Helps
        </button>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-800 h-800">
            <p>How roadmap helps u here </p>
            <button onClick={() => setIsDialogOpen(false)} className="text-white bg-gradient-to-br from-[#312e81] to-[#a5b4fc] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-4 text-center mt-4">
              Close Dialog
            </button>
          </div>
        </div>
      )}

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
                <div className="flex flex-wrap p-">
                  <Link href={`/dynamiccontent/${Choices[randomIndex].id}`} prefetch={false}>

                    <button className=" ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#312e81] to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {showFullMainLine ? 'Know Less' : 'Know more'}
                      </span>
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
        <div className="flex flex-nowrap justify-start w-[2900px] ">
          {Choices.map((item, index) => (
            <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 m-4  bg-[#d8b4fe] bg-opacity-20 rounded-lg shadow-md  p-6 dev transform transition-transform hover:scale-105 ">
              <Link href={`/dynamiccontent/${item.id}`} prefetch={false}>
               
                <div className='p-2 w-400 h-400'> <img src={item.image} alt={`${item.title} image`} className="w-400 h-400 object-cover mb-2 rounded" /></div>
                <h2 className="text-xl  text-white font-semibold text-center mt-2 p-4">{item.title}</h2>
                <p className='text-[#cbd5e1] text-sm'>{showFullMainLine ? item.pageContent.mainLine : `${item.pageContent.mainLine.slice(0, 100)}...`}</p>
                {item.pageContent.mainLine.length > 0 && (

                  <div className='flex flex-wrap p-2'>
                   

                    <button className=" ml-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#312e81] to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none ">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                      {showFullMainLine ? 'View Less' : 'View More'}
                      </span>
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

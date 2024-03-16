//lofinFlow 

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Choices from '../../dynamiccontent/Choices';
import "../../../app/globals.css";

const LoginFlow: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className='grid max-w-screen-xl p-9 m-5 justify-center'>
        <h1 className='font-bold lg:text-5xl text-white justify-center'>
          <span className="text-pink-10 m-6">What </span>   Bring  You <span className="text-orange-10">  Here ? </span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {Choices.map((item, index) => (
          <div key={index} className="sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 bg-[#94a3b8] bg-opacity-60 rounded-lg shadow-md p-6 dev transform transition-transform hover:scale-105">
            <h1>{item.pageContent.periode}</h1>
            <Link href={`/DetailPage?title=${index}`} prefetch={false}>
                <img src={item.image} alt={`${item.title} image`} className="w-full h-35 object-cover mb-2 rounded" />
                <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                <p>{item.pageContent.mainLine}</p>
              
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default LoginFlow;

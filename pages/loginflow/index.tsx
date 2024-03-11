import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import "../../app/globals.css"
import Navbar from '@/components/Navbar';

const Choices = [
  {
    title: "Full Stack Web Development",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/seo-and-web-coding-10506472-8458917.png?f=webp",
    pageContent: {
      title: "Full Stack Web Development",
      mainLine: "Explore the world of full stack web development.",
      points: ["Frontend technologies", "Backend technologies", "DB"]
    }
  },
  {
    title: "Front End Development",
    image:"https://static.vecteezy.com/system/resources/previews/012/658/272/original/3d-character-illustration-of-front-end-developer-free-png.png",
    pageContent: {
      title: "Front End Development",
      mainLine: "Dive into the frontend technologies and frameworks.",
      points: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue"]
    }
  },
  {
    title: "Big Data and Machine Learning",
    image:"https://cdn3d.iconscout.com/3d/premium/thumb/big-data-5796852-4863020.png?f=webp",
    pageContent: {
      title: "Big Data and Machine Learning",
      mainLine: "Discover the realm of big data and machine learning.",
      points: ["Data processing", "Machine learning algorithms", "Data visualization"]
    }
  },
  {
    title: "DevOps",
    image:"https://cdn3d.iconscout.com/3d/premium/thumb/devops-9284914-7577861.png",
    pageContent: {
      title: "DevOps",
      mainLine: "Explore DevOps practices and tools.",
      points: ["Continuous Integration", "Continuous Deployment", "Infrastructure as Code"]
    }
  },
];

const LoginFlow = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Navbar/>
      <div className='navbar'>
        {/* Your Navbar Component */}
      </div>

      <div className='grid max-w-screen-xl p-9 m-5 justify-center'>
        <h1 className='font-bold lg:text-5xl text-white justify-center'>
          <span className="text-pink-10 m-6">What </span>   Bring  You <span className="text-orange-10">  Here ? </span>
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {Choices.map((item, index) => (
          <div key={index} className={`sm:w-1/2 md:w-1/3 lg:w-1/4 m-4 bg-white rounded-lg shadow-md p-6 dev ${isVisible ? 'animated' : ''}`}>
            <Link href={`/DynamicContent/${encodeURIComponent(item.title)}`}>
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

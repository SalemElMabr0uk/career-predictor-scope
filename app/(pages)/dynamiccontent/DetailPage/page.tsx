import React from 'react';
import { Choices } from '../_const/choices';


interface DetailPageProps {
  id: number;
}

const DetailPage: React.FC<DetailPageProps> = ({ id }) => {
  const selectedChoice = Choices.find((choice) => choice.id === id);

  if (!selectedChoice) {
    return <div>Choice not found</div>;
  }

  return (
    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-4 p-3">
      <div className='justify-center pt-8 md:ml-24'>
        <h1 className='font-bold lg:text-5xl text-white justify-center'>
          <span className="text-pink-10 m-4 p-2"> {selectedChoice.pageContent.title} </span>
        </h1>
        

        <p className=" text-xl font-semibold mb-2 p-4">{selectedChoice.pageContent.periode}</p>
        <p className="text-lg mb-4">{selectedChoice.pageContent.mainLine}</p>
        <ul className="list-disc list-inside text-lg">
        <h2>points :</h2>
        
          {selectedChoice.pageContent.points.map((point: string, index: number) => (
             <h3 key={index}>{point}</h3> 
          ))}
        </ul>
      </div>
      <div className="flex-1 items-start hidden md:block ">
        <div className="h-full w-full relative z-20 flex-col ">
          <img src={selectedChoice.image} alt={`${selectedChoice.title} image`} className="w-full h-35 object-cover mb-2 rounded data-twe-animation-delay" />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

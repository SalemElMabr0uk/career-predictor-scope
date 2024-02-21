import React, { useState } from 'react';
import "../../app/globals.css"
import Navbar from '@/components/Navbar';

export default function Question() {

  // Define an array of questions with their respective choices
  const questions = [
    {
      question: 'Know what you are building? ',
      choices: ['YES, let’s cut to the chase', 'NO, I can use help in validating the hypothesis']
    },
    {
      question: 'What size of people do you operate with?',
      choices: ['Alone', 'Myself + 1', 'Myself + 4', 'Myself + 10', 'Myself + 10']
    },
    {
      question: 'What distribution channel do you wish to tap?',
      choices: ['Online', 'Offline', 'Online + Offline']
    },
    {
      question: 'Do you have a product in mind?',
      choices: ['No, I have just come up with my hypothesis.', 'I have some preliminary research about my product and the problem', 'I have an extensive competitive and market fit research done informally',
        'I have an extensive competitive and market fit research done informally', 'I have everything in bits and pieces, I’m willing to write it down or upload my idea.']
    },
    {
      question: 'What technology do you need ?',
      choices: ['Web App', 'Mobile App', 'Embedded software', 'Digital Marketing', 'Custom Enterprise Tools']
    }
  ];

  // State to keep track of selected choices for each question
  const [selectedChoices, setSelectedChoices] = useState(Array(questions.length).fill(null));

  // State to keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelectChoice = (choiceIndex: number) => {
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[currentQuestionIndex] = choiceIndex;
    setSelectedChoices(newSelectedChoices);
  
    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Render the current question and choices
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Navbar />
      <div className='grid justify-items-center'>
        <h1 className='font-bold lg:text-5xl text-white p-8 mt-8 '>

          <span className="text-pink-10  justify-center">Beautiful choice!!</span>Let’s <span className="text-orange-10"> do it   </span>
        </h1>
        <div className="max-w-md mx-auto  p-8 rounded-lg shadow-lg justify-center ">
          <div className='justify-center'>  <h2 className="text-lg font-semibold mb-2   text-white p-2">{currentQuestion.question}</h2></div>
        
          <div className="space-y-4 p-2 px-2">
            {currentQuestion.choices.map((choice, choiceIndex) => (
              <button
                key={choiceIndex}
                className={`  justify-between text-black px-4 py-3 p-2 rounded-md bg-gradient-to-r from-pink-100 to-yellow-100 hover:from-yellow-500   hover:to-purple-400 ${selectedChoices[currentQuestionIndex] === choiceIndex && 'bg-blue-700'}`}
                onClick={() => handleSelectChoice(choiceIndex)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>



      </div>

    </>

  );
}


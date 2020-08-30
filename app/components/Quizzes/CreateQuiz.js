import React, { useState } from 'react';
import Input from '../Input/Input';

const CreateQuiz = () => {
  const [answers, setAnswers] = useState([]);
  return (
    <div className="h-full flex-1 p-2 md:p-4 bg-white rounded-md shadow-sm m-2">
      <div className="text-lg font-bold text-teal-800"> Create a New Quiz </div>
      {/* <form className="my-4"> */}
      {/*  <Input */}
      {/*    label="Question" */}
      {/*    placeholder="Type here your question ?" */}
      {/*    className="h-20 bg-gray-400 text-2xl" */}
      {/*  /> */}
      {/*  {answers.map(answer => ( */}
      {/*    < */}
      {/*  ))} */}
      {/* </form> */}
    </div>
  );
};

export default CreateQuiz;

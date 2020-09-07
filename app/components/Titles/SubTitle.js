import React from 'react';

const Quizzes = props => (
  <div className="font-serif w-full text-left text-xl md:text-2xl font-bold text-teal-600">
    {' '}
    {props.children}{' '}
  </div>
);

export default Quizzes;

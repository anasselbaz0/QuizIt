import React from 'react';
import Login from './Login';

function Auth() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-2xl md:text-3xl font-semibold">
        {' '}
        Welcome to <span className="text-teal-500">Quiz It</span>{' '}
      </div>
      <div className="mb-4 text-md md:text-lg">
        {' '}
        Create your own Quizzes{' '}
      </div>
      <div
        className="shadow-md rounded-sm bg-white p-2 md:p-4 py-2 md:py-4 w-4/5 max-w-xl flex flex-col"
      >
        <Login />
      </div>
    </div>
  );
}

export default Auth;

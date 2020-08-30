import React from 'react';
import Login from './Login';

function Auth() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-3xl font-semibold">
        {' '}
        Welcome to <span className="text-teal-500">Quiz It</span>{' '}
      </div>
      <div className="mb-4 text-lg font-semibold">
        {' '}
        Create your own Quizzes{' '}
      </div>
      <div
        className="shadow-sm rounded bg-white p-4 mb-4 w-3/4 min-w-md max-w-md
                      rounded-lg flex flex-col"
      >
        <Login />
      </div>
    </div>
  );
}

export default Auth;

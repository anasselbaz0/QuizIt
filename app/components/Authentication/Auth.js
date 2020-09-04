import React from 'react';
import Login from './Login';

function Auth() {
  return (
    <div className="min-w-2xl flex flex-col items-center justify-center">
      <div className="text-2xl md:text-3xl font-semibold">
        Welcome to <span className="text-teal-500">Quiz It</span>{' '}
      </div>
      <Login />
    </div>
  );
}

export default Auth;

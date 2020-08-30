import React from 'react';
import clsx from 'clsx';

const Button = props => (
  <button
    onClick={props.onClick}
    className={clsx(
      props.disabled && 'opacity-50 cursor-not-allowed',
      'py-3 px-4 rounded-md w-full hover:font-medium focus:outline-none focus:shadow-outline',
      !props.outlined && 'bg-teal-500 hover:bg-teal-600 text-white',
      props.outlined &&
        'border border-teal-500 text-teal-500 hover:text-teal-600 bg-white hover:bg-teal-100',
      props.className
    )}
    type={props.type}
  >
    {props.children}
  </button>
);

export default Button;

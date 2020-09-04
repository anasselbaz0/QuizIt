import React from 'react';
import clsx from 'clsx';

const Button = props => (
  <button
    onClick={props.onClick}
    className={clsx(
      'm-1 md:w-auto w-full',
      props.disabled && 'opacity-50 cursor-not-allowed',
      'py-4 md:px-10 rounded-sm hover:font-medium focus:outline-none focus:shadow-outline',
      !props.outlined &&
        `bg-teal-500 hover:bg-${props.color || 'teal'}-600 text-white`,
      props.outlined &&
        `border border-${props.color || 'teal'}-500 text-${props.color ||
          'teal'}-500 hover:${props.color ||
          'teal'}-teal-600 bg-white hover:bg-${props.color || 'teal'}-100`,
      props.className || '',
    )}
    type={props.type}
  >
    {props.children}
  </button>
);

export default Button;

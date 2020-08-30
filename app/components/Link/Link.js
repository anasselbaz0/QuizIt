import React from 'react';

const Link = props => (
  <span
    onClick={props.onClick}
    className="m-auto font-bold text-sm cursor-pointer text-teal-500 hover:underline hover:text-teal-800"
  >
    {props.children}
  </span>
);

export default Link;

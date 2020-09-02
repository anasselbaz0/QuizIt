import React from 'react';

const ButtonGroup = props => (
  <div className="my-3 w-full flex flex-1 flex-col md:block text-right">
    {props.children}
  </div>
);

export default ButtonGroup;

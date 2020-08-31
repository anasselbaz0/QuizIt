import React from 'react';

const ButtonGroup = (props) => {
  return (
    <div className="w-full flex flex-col md:block">
      {props.children}
    </div>
  );
};

export default ButtonGroup;

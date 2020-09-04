import React from 'react';
import clsx from 'clsx';

const ButtonGroup = props => (
  <div
    className={clsx(
      'my-3 w-full flex flex-1 flex-col md:block',
      props.className || '',
    )}
  >
    {props.children}
  </div>
);

export default ButtonGroup;

import React from 'react';
import clsx from 'clsx';

const ButtonGroup = props => (
  <div
    className={clsx(
      'mb-3 flex flex-1 flex-col md:text-right md:block',
      props.className || '',
    )}
  >
    {props.children}
  </div>
);

export default ButtonGroup;

import React from 'react';
import clsx from 'clsx';

const Item = props => (
  <div
    className={clsx(
      'question w-full flex justify-between items-center items-center bg-gray-100 font-semibold p-2 md:p-3 rounded-sm mb-1',
      props.className || '',
    )}
  >
    <div> {props.children} </div>
  </div>
);

export default Item;

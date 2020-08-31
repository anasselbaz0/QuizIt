import React from 'react';
import { DoneOutline } from '@material-ui/icons';
import clsx from 'clsx';

const Question = props => (
  <div className="flex-1 text-gray-700 font-semibold w-full flex justify-between bg-gray-100 items-center px-4 rounded-sm mb-1">
    <div> {props.children} </div>
    <DoneOutline
      className={clsx(
        props.correct
          ? 'text-teal-500 hover:text-teal-600'
          : 'text-gray-400 hover:text-gray-500',
        'cursor-pointer',
      )}
    />
  </div>
);

export default Question;

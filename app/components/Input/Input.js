import React from 'react';
import clsx from 'clsx';

// props =
//    label
//    error
//    type
//    placeholder

const Input = props => (
  <div
    className={clsx('md:mb-2 mt-1 w-full md:w-auto flex-auto', props.className)}
  >
    {!props.noLabel && (
      <label
        className="block font-sans text-gray-700 text-base font-bold mb-1 md:mb-2"
        htmlFor={props.label.toLowerCase().replace(' ', '_')}
      >
        {props.label}
      </label>
    )}
    <input
      className={clsx(
        ' bg-gray-200  appearance-none rounded-sm w-full p-4 md:p-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline',
        props.error && 'border border-red-500',
        props.className || '',
      )}
      name={props.label.toLowerCase().replace(' ', '_')}
      id={props.label.toLowerCase().replace(' ', '_')}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
    <p className="text-red-500 text-xs italic"> {props.error} </p>
  </div>
);

export default Input;

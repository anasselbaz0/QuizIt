import React from 'react';
import './Loader.css';
import clsx from 'clsx';

const Loader = props => (
  <div
    className={clsx(
      'bg-teal-100 bg-opacity-25 h-screen w-screen absolute top-0 right-0 flex justify-center items-center',
      props.active ? 'block' : 'hidden',
    )}
  >
    <div className="loader">
      Loading...
      {/* <div className={clsx("lds-ellipsis", props.active ? "block" : "w-0 hidden")}> */}
    </div>
  </div>
);

export default Loader;

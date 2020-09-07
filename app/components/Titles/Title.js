import React from 'react';

const Title = props => (
  <div className="font-serif text-2xl mt-1 mb-4 md:text-3xl xl:text-4xl font-bold text-teal-800">
    {props.children}
  </div>
);

export default Title;

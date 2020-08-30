import React from 'react';
import MenuItem from './MenuItem';

const Menu = props => (
  <div className="bg-teal-500 rounded-md text-white w-30 h-300 py-2 px-4 block md:flex">
    {props.menu.map(item => (
      <MenuItem key={item} item={item} />
    ))}
  </div>
);

export default Menu;

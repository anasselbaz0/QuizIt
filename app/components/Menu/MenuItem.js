import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

const MenuItem = props => (
  <Link
    to={props.item.to || '#'}
    className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
  >
    {props.item.name}
  </Link>
);

export default MenuItem;

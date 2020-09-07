import React from 'react';
import { useSelector } from 'react-redux';
import Policy from '../../components/Policy/Policy';

function HomePage() {
  return (
    <div className="md:flex">
      <Policy />
    </div>
  );
}

export default HomePage;

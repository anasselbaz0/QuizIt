import React from 'react';
import { useSelector } from 'react-redux';
import Policy from '../../components/Policy/Policy';

function HomePage() {
  const profile = useSelector(state => state.auth.profile);
  return (
    <div className="md:flex">
      <Policy/>
    </div>
  );
}

export default HomePage;

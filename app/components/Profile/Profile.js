import React from 'react';
import './Profile.css'
import { useSelector } from 'react-redux';

const Profile = props => {
  const profile = useSelector(state => state.auth.profile);
  return (
  <div className="profile p-2 md:mr-0 md:p-4 md:w-1/5 bg-white rounded-sm shadow-sm m-2">
    <div className="md:text-right text-left text-md font-medium text-gray-600 mb-2">
      {profile.email}
    </div>
    <div className="md:text-right text-left text-sm font-bold text-gray-500">
      Last login <br/> <span className="text-teal-700"> {profile.metadata.lastSignInTime} </span>
    </div>
    <div className="md:text-right text-left text-sm font-bold text-gray-500">
      Creation time <br/> <span className="text-teal-700"> {profile.metadata.creationTime} </span>
    </div>
  </div>
)};

export default Profile;

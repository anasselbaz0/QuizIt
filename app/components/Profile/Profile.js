import React from 'react';
import './Profile.css'

const Profile = props => {
  return (
  <div className="profile p-2 md:mr-0 md:p-4 md:w-1/5 bg-white rounded-sm shadow-sm m-2">
    <div className="md:text-right text-left text-md font-medium text-gray-600 mb-2">
      {props.profile.email}
    </div>
    <div className="md:text-right text-left text-sm font-bold text-gray-500">
      Last login <br/> <span className="text-teal-700"> {props.profile.metadata.lastSignInTime} </span>
    </div>
    <div className="md:text-right text-left text-sm font-bold text-gray-500">
      Creation time <br/> <span className="text-teal-700"> {props.profile.metadata.creationTime} </span>
    </div>
  </div>
)};

export default Profile;

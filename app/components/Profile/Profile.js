import React from 'react';

const Profile = props => (
  <div className="h-auto p-2 md:mr-0 md:p-4 md:w-1/5 bg-white rounded-md shadow-sm m-2">
    <div className="md:text-right text-left text-sm font-medium text-gray-600">
      {' '}
      {props.profile.email}{' '}
    </div>
  </div>
);

export default Profile;

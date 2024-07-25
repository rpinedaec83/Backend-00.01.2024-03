import React from 'react';

const Welcome = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <img src={user.imageUrl} alt={user.name} />
    </div>
  );
};

export default Welcome;
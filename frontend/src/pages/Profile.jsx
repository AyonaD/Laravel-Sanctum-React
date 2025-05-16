import React, { useEffect, useState } from 'react';

export default function Profile({ user }) {
   if (!user) return <p>Please log in to see your profile.</p>;

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

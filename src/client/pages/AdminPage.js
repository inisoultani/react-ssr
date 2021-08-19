import React from 'react';
import auth from '../components/requireAuth';

const AdminPage = () => {
  return (
    <div>
      <h2>List of Admin users : </h2>
    </div>
  );
};

export default { component: auth(AdminPage) };

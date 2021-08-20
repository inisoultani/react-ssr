import React from 'react';
import auth from '../components/requireAuth';
import { fetchAdminAsync, selectAdmins } from '../../redux/adminSlice';
import useGet from '../../hooks/useGet';

export const loadData = (store) => {
  return store.dispatch(fetchAdminAsync());
};

const AdminPage = () => {
  const [adminsState] = useGet(selectAdmins, fetchAdminAsync);

  const renderAdminsList = () => {
    return adminsState.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  };

  return (
    <div>
      <h2>List of Admin users : </h2>
      <ul>{renderAdminsList()}</ul>
    </div>
  );
};

export default { loadData, component: auth(AdminPage) };

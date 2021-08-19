import React, { useEffect, useState } from 'react';
import { fetchUserAsync, selectUsers } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const loadData = (store) => {
  
  return store.dispatch(fetchUserAsync());
};

const UsersList = () => {
  const usersState = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (usersState.length === 0) {
      dispatch(fetchUserAsync());
      console.log('state updated');
    }
  }, [usersState]);

  const renderUsersList = () => {
    return usersState.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      Here's a big list of users
      <ul>{renderUsersList()}</ul>
    </div>
  );
};

export default { component: UsersList, loadData };

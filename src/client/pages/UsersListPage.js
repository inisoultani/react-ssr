import React from 'react';
import { Helmet } from 'react-helmet';
import { fetchUserAsync, selectUsers } from '../../redux/userSlice';
import useGet from '../../hooks/useGet';

export const loadData = (store) => {
  return store.dispatch(fetchUserAsync());

  // below code will causing promise on the handleRender.js hanging,  the promise extracted here
  // we need to manually to resolve the loadData function with new promises
  // without unwrap way, all promise will resolved with details error in the then((values) ==>)

  // store
  // .dispatch(fetchUserAsync())
  // .unwrap()
  // .then((originalPromiseResult) => {})
  // .catch((error) => {
  //   console.log('LoadData UsersListPage : ', error);
  //   return new Promise((resolve, reject) => {
  //     resolve('LoadData UsersListPage failed');
  //   });
  // });
};

const UsersList = () => {
  const [usersState] = useGet(selectUsers, fetchUserAsync);

  // useEffect(() => {
  //   console.log('UserList loaded');
  //   dispatch(fetchUserAsync());
  //   loaded.current = true;
  // });

  const renderUsersList = () => {
    return usersState.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  const renderHead = () => {
    return (
      <Helmet>
        <title>{`${usersState.length} Users`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  };

  return (
    <div>
      {renderHead()}
      <h2>Here's a big list of users :</h2>
      <ul>{renderUsersList()}</ul>
    </div>
  );
};

export default { component: UsersList, loadData };

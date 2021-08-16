import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// const Routes = () => {
//   return (
//     <div>
//       <Route exact path="/users">
//         {populateInitialStateData().then((data) => {
//           console.log(data);
//           <UsersListPage initialData={data} />;
//         })}
//       </Route>
//       <Route exact path="/" component={HomePage} />
//     </div>
//   );
// };

export default [
  {
    path: '/',
    exact: true,
    ...HomePage,
  },
  {
    path: '/users',
    ...UsersListPage,
  },
];

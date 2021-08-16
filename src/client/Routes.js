import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

// const Routes = () => {
//   return (
//     <div>
//       <Route exact path="/users">
//         {populateInitialStateData().then((data) => {
//           console.log(data);
//           <UsersList initialData={data} />;
//         })}
//       </Route>
//       <Route exact path="/" component={Home} />
//     </div>
//   );
// };

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/users',
    loadData: loadData,
    component: UsersList,
  },
];

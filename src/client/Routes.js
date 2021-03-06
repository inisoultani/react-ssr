import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './components/App';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';
import MarketingPage from './pages/MarketingPage';

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
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...HomePage,
      },
      {
        path: '/users',
        ...UsersListPage,
      },
      {
        path: '/admins',
        ...AdminPage,
      },
      {
        path: '/marketing',
        ...MarketingPage,
      },
      {
        path: '/pricing',
        ...MarketingPage,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

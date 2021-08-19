import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import {
  selectCurrentUser,
  fetchCurrentUserAsync,
} from '../../redux/authSlice';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export const loadData = (store) => {
  return store.dispatch(fetchCurrentUserAsync());
};

const App = (props) => {
  const currentUserState = useSelector(selectCurrentUser);

  return (
    <AppStyled>
      <Header currentUser={currentUserState} />
      <ContentStyled>{renderRoutes(props.route.routes)}</ContentStyled>
    </AppStyled>
  );
};

export default { component: App, loadData };

const AppStyled = styled.div`
  background-color: #e7e0c9;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 4px;
`;

const ContentStyled = styled.div`
  padding: 10px 20px;
  color: #726e62;
`;

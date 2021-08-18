import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const App = (props) => {
  return (
    <AppStyled>
      <Header />
      <ContentStyled>{props.children}</ContentStyled>
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
  background-color: #e7e0c9;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 4px;
`;

const ContentStyled = styled.div`
  padding: 10px 20px;
`;

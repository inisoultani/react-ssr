import React from 'react';
import styled from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';

const NotFoundPage = (props) => {
  if (props.staticContext) props.staticContext.notFound = true;
  return (
    <NotFoundStyled>
      <ErrorIcon style={{ fontSize: 50, color: 'orange' }} />
      <h1>404</h1>
    </NotFoundStyled>
  );
};

export default { component: NotFoundPage };

const NotFoundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

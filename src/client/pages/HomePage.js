import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAsync } from '../../redux/userSlice';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState(
    'this is home components rendered as HTML string on server side',
  );
  const isClientBrowser = () => typeof window !== 'undefined';
  const currentState = useSelector((state) => state.comments);

  useEffect(() => {
    setText(
      'This is home components rendered by React useEffect on page loaded',
    );
    console.log('current state : ', currentState);
  }, []);

  const onClick = (event) => {
    console.log('onClick - test re-deploy');
    dispatch(fetchUserAsync());
  };

  return (
    <div>
      <div>{text}</div>
      <p>
        Button below is an example to simulate button onClick event hydrate by
        React.Hydrate
      </p>

      <ButtonStyled onClick={onClick}>Click me</ButtonStyled>
    </div>
  );
};

export default { component: Home };

const ButtonStyled = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: rgb(17, 50, 77);
  color: white;
  border-radius: 4px;
  text-transform: uppercase;

  &:hover {
    background-color: #6b7aa1 !important;
    cursor: pointer;
  }
`;

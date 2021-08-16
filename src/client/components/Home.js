import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAsync } from '../../redux/userSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState(
    'this is home components rendered as HTML string on server side',
  );

  const currentState = useSelector((state) => state.comments);

  useEffect(() => {
    setText(
      'this is home components rendered by React useEffect on page loaded',
    );
    console.log('current state : ', currentState);
  }, []);

  const onClick = (event) => {
    dispatch(fetchUserAsync());
  };

  return (
    <div>
      <div>{text}</div>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export default Home;

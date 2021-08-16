import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
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

  return (
    <div>
      <div>{text}</div>
      <button onClick={() => console.log('button home clicked')}>
        Click me!
      </button>
    </div>
  );
};

export default Home;

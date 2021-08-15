import React, { useEffect, useState } from 'react';

const Home = () => {
  const [text, setText] = useState(
    'this is home components rendered on server side',
  );

  useEffect(() => {
    setText('this is home components rendered by React useEffect');
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

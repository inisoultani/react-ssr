import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
// import history from '../history';

const MarketingPage = () => {
  const ref = useRef(null);
  console.log(mount);

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      onRemoteNavigate: (location) => {
        console.log(location.pathname);
        console.log(history.location.pathname);
        if (history.location.pathname !== location.pathname) {
          // history.push(location.pathname);
        }
        // history.push(location.pathname);
      },
    });
    // history.listen(onContainerNavigate);

    console.log('process : ', window);
  }, []);
  return <div ref={ref}></div>;
};

export default MarketingPage;

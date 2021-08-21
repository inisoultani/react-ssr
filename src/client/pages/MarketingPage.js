import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const isClientBrowser = () => typeof window !== 'undefined';

const MarketingPage = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (isClientBrowser()) {
      console.log('rerender Marketing page');
      import('marketing/MarketingApp').then(({ mount }) => {
        console.log(
          'MarketingApp.history.location.pathname : ',
          history.location.pathname,
        );
        const { onContainerNavigate } = mount(ref.current, {
          onRemoteNavigate: (location) => {
            console.log(history.location.pathname);
            console.log(location.pathname);
            console.log(
              'isNotEqual : ',
              history.location.pathname !== location.pathname,
            );
            if (history.location.pathname !== location.pathname) {
              //
              history.push(location.pathname);
            }
            //history.push(location.pathname);
          },
          initialEntry:
            history.location.pathname === '/marketing'
              ? '/'
              : history.location.pathname,
        });
        //history.listen(onContainerNavigate);
      });
    }
  }, []);

  return <div ref={ref}></div>;
};

export default { component: MarketingPage };

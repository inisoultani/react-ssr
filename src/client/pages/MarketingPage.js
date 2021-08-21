// import { mount } from 'marketing/MarketingApp';

import React, { useRef, useEffect, Suspense } from 'react';
// import history from '../history';
// import('marketing/MarketingApp').then((MarketingApp) => {
//   console.log(MarketingApp);
// });
// const mount = React.lazy(() => import('marketing/MarketingApp'));

const isClientBrowser = () => typeof window !== 'undefined';

// if (isClientBrowser()) {
//   import('marketing/MarketingApp').then((MarketingApp) => {
//     console.log('MarketingApp : ', MarketingApp);
//   });
// }

const MarketingPage = () => {
  const ref = useRef(null);
  // console.log(mount);

  useEffect(() => {
    if (isClientBrowser()) {
      import('marketing/MarketingApp').then(({ mount }) => {
        console.log('MarketingApp.mount : ', mount);
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
      });
    }
  }, []);

  console.log('isClientBrowser : ', isClientBrowser());
  const SsrCompatibleSuspense = isClientBrowser() ? Suspense : React.Fragment;
  return (
    <SsrCompatibleSuspense>
      <div ref={ref}></div>
    </SsrCompatibleSuspense>
  );
};

export default MarketingPage;

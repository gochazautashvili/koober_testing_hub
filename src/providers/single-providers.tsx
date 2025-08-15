import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ReactNode, Fragment } from 'react';

import { ourFileRouter } from '@/app/api/uploadthing/core';

export const SingleProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      {children}
    </Fragment>
  );
};

import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ReactNode, Fragment } from 'react';

import { ourFileRouter } from '@/app/api/uploadthing/core';
import { Toaster } from 'sonner';

export const SingleProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <Toaster position="top-right" />
      {children}
    </Fragment>
  );
};

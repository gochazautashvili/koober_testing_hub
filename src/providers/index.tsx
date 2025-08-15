'use client';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode } from 'react';

import { SingleProviders } from './single-providers';
import { QueryProvider } from './query-provider';
import { ThemeProvider } from './theme-provider';

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <SingleProviders>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ThemeProvider>
      </SingleProviders>
    </QueryProvider>
  );
};

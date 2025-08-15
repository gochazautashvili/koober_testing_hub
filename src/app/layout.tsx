import type { Metadata } from 'next';

import { MainProvider } from '@/providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Koober Testing Hub',
  description: 'Koober Testing Hub',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

import { inter } from '~/static/fonts';

import { RootProvider } from './provider';

import '~/static/styles/reset.scss';
import '~/static/styles/colors.scss';

export const metadata: Metadata = {
  title: 'Just a blog',
  description: 'A platform for blogs and discussions: share and comment!',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <RootProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </RootProvider>
  );
};

export default RootLayout;

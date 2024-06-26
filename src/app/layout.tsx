import type { Metadata } from 'next';

import { inter } from '~/static/fonts';

import { Header } from './_components';
import { RootProvider } from './provider';

import '~/static/styles/reset.scss';
import '~/static/styles/colors.scss';
import '~/static/styles/global.scss';

export const metadata: Metadata = {
  title: 'Просто блог',
  description: 'Платформа для блогов и обсуждений: делитесь и комментируйте!',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <RootProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </RootProvider>
  );
};

export default RootLayout;

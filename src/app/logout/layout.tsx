import type { Metadata } from 'next';

import { LogoutPageProvider } from './provider';

interface LogoutPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Выйти | Просто блог',
};

const LogoutPageLayout: React.FC<LogoutPageLayoutProps> = ({ children }) => (
  <LogoutPageProvider>{children}</LogoutPageProvider>
);

export default LogoutPageLayout;

import type { Metadata } from 'next';

import { AuthPageProvider } from './provider';

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Авторизация | Просто блог',
};

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children }) => (
  <AuthPageProvider>{children}</AuthPageProvider>
);

export default AuthPageLayout;

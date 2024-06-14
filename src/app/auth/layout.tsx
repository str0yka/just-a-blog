import { AuthPageProvider } from './provider';

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

export const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children }) => (
  <AuthPageProvider>{children}</AuthPageProvider>
);

export default AuthPageLayout;

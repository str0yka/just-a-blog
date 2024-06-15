import { AuthPageProvider } from './provider';

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children }) => (
  <AuthPageProvider>{children}</AuthPageProvider>
);

export default AuthPageLayout;

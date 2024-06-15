import { LogoutPageProvider } from './provider';

interface LogoutPageLayoutProps {
  children: React.ReactNode;
}

const LogoutPageLayout: React.FC<LogoutPageLayoutProps> = ({ children }) => (
  <LogoutPageProvider>{children}</LogoutPageProvider>
);

export default LogoutPageLayout;

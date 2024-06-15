'use client';

import { redirect } from 'next/navigation';

import { ROUTES } from '~/utils/constants';
import { useUserStore } from '~/utils/store';

interface LogoutPageProviderProps {
  children: React.ReactNode;
}

export const LogoutPageProvider: React.FC<LogoutPageProviderProps> = ({ children }) => {
  const userStore = useUserStore();

  if (!userStore.user) {
    redirect(ROUTES.HOME);
  }

  return children;
};

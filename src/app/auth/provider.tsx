'use client';

import { redirect } from 'next/navigation';

import { ROUTES } from '~/utils/constants';
import { useUserStore } from '~/utils/store';

interface AuthPageProviderProps {
  children: React.ReactNode;
}

export const AuthPageProvider: React.FC<AuthPageProviderProps> = ({ children }) => {
  const userStore = useUserStore();

  if (userStore.user) {
    redirect(ROUTES.HOME);
  }

  return children;
};

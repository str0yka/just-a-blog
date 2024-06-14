'use client';

import { StoreContext } from 'storeon/react';

import { store } from '~/utils/store';

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

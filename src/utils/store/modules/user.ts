import type { StoreonModule } from 'storeon';
import { useStoreon } from 'storeon/react';

export interface UserState {
  user: User | null;
}

export interface UserEvents {
  set: User | null;
}

export const userModule: StoreonModule<UserState, UserEvents> = (store) => {
  store.on('@init', () => ({ user: null }));
  store.on('set', (_, event) => ({ user: event }));
};

export const useUserStore = () => useStoreon<UserState, UserEvents>('user');

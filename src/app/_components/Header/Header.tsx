'use client';

import Link from 'next/link';

import { Typography } from '~/components/ui';
import { ROUTES } from '~/utils/constants';
import { useUserStore } from '~/utils/store';

import s from './Header.module.scss';

export const Header = () => {
  const { user } = useUserStore();

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link href={ROUTES.HOME}>
          <Typography
            variant="title.h2"
            component="h1"
          >
            Просто блог
          </Typography>
        </Link>
        <div className={s['profile-container']}>
          {user && (
            <>
              <Typography
                variant="paragraph16.regular"
                className={s.username}
              >
                {user.username}
              </Typography>
              /
            </>
          )}
          <Link href={user ? ROUTES.LOGOUT : ROUTES.AUTH}>
            <Typography variant="paragraph16.regular">{user ? 'Выйти' : 'Войти'}</Typography>
          </Link>
        </div>
      </div>
    </header>
  );
};

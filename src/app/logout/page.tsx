'use client';

import { Spinner, Typography } from '~/components/ui';
import { postLogout } from '~/utils/api';
import { useQuery } from '~/utils/hooks';
import { useUserStore } from '~/utils/store';

import s from './page.module.scss';

export const LogoutPage = () => {
  const userStore = useUserStore();
  const postLogoutQuery = useQuery(postLogout, {
    onSuccess: () => {
      userStore.dispatch('set', null);
    },
  });

  return (
    <main className={s.container}>
      {postLogoutQuery.isLoading && <Spinner />}
      {postLogoutQuery.isError && (
        <>
          <Typography
            variant="title.h3"
            component="p"
          >
            Что-то пошло не так :(
          </Typography>
          <Typography
            variant="paragraph16.regular"
            component="p"
          >
            {postLogoutQuery.error?.message}
          </Typography>
        </>
      )}
    </main>
  );
};

export default LogoutPage;

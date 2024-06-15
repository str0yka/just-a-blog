'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Input, PasswordInput, Typography } from '~/components/ui';
import { postLogin } from '~/utils/api';
import { useUserStore } from '~/utils/store';

import { loginFormScheme } from './_constants';

import s from './page.module.scss';

const AuthPage = () => {
  const userStore = useUserStore();

  const loginForm = useForm({
    defaultValues: { password: '', username: '' },
    resolver: zodResolver(loginFormScheme),
  });

  return (
    <main className={s.container}>
      <form
        className={s['form-container']}
        onSubmit={loginForm.handleSubmit(async (values) => {
          const postLoginResponse = await postLogin({ params: values });
          userStore.dispatch('set', postLoginResponse.data.user);
        })}
      >
        <Typography
          component="h2"
          variant="title.h2"
        >
          Войти
        </Typography>
        <Input
          placeholder="Your username"
          error={!!loginForm.formState.errors.username?.message}
          helperText={loginForm.formState.errors.username?.message}
          {...loginForm.register('username')}
        />
        <PasswordInput
          placeholder="Your password"
          error={!!loginForm.formState.errors.password?.message}
          helperText={loginForm.formState.errors.password?.message}
          {...loginForm.register('password')}
        />
        <Button
          type="submit"
          disabled={loginForm.formState.isSubmitting || loginForm.formState.isSubmitSuccessful}
        >
          Войти
        </Button>
      </form>
    </main>
  );
};

export default AuthPage;

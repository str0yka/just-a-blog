import * as z from 'zod';

export const loginFormScheme = z.object({
  username: z.string().min(1, {
    message: 'Поля является обязательным',
  }),
  password: z.string().min(1, {
    message: 'Поля является обязательным',
  }),
});

export type LoginFormScheme = z.infer<typeof loginFormScheme>;

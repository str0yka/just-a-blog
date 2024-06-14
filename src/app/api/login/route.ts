import { randomUsername } from '~/utils/helpers';

export const POST = () => {
  const user: User = {
    id: Date.now(),
    username: randomUsername(),
  };

  return Response.json({ user });
};

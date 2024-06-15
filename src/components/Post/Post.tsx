import clsx from 'clsx';

import { Typography } from '~/components/ui';

import s from './Post.module.scss';

interface PostProps {
  id?: number;
  userId?: number;
  title: string;
  body: string;
  truncateBody?: boolean;
}

export const Post: React.FC<PostProps> = ({ id, userId, body, title, truncateBody = false }) => (
  <article>
    {id !== undefined && (
      <Typography
        component="p"
        variant="paragraph12.regular"
        color="secondary"
      >
        Пост #{id}
      </Typography>
    )}
    {userId !== undefined && (
      <Typography
        component="p"
        variant="paragraph12.regular"
        color="secondary"
      >
        Опубликовал #{userId}
      </Typography>
    )}
    <Typography
      component="h2"
      variant="title.h2"
      color="primary"
    >
      {title}
    </Typography>
    <Typography
      component="p"
      variant="paragraph16.regular"
      color="secondary"
      className={clsx({ [s['truncate-body']]: truncateBody })}
    >
      {body}
    </Typography>
  </article>
);

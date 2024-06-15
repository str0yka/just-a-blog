import clsx from 'clsx';

import { Typography } from '~/components/ui';

import s from './Comment.module.scss';

interface CommentProps {
  postId?: number;
  email?: string;
  name: string;
  body: string;
  truncateBody?: boolean;
}

export const Comment: React.FC<CommentProps> = ({
  postId,
  email,
  name,
  body,
  truncateBody = false,
}) => (
  <article>
    {postId !== undefined && (
      <Typography
        component="p"
        variant="paragraph12.regular"
        color="secondary"
      >
        Комментарий к #{postId}
      </Typography>
    )}
    <Typography
      component="p"
      variant="paragraph14.regular"
      color="secondary"
    >
      {name} {email !== undefined && <>({email})</>}
    </Typography>
    <Typography
      component="p"
      variant="paragraph16.medium"
      color="primary"
      className={clsx({ [s['truncate-body']]: truncateBody })}
    >
      {body}
    </Typography>
  </article>
);

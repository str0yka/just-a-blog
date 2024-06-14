import { Typography } from '~/components/ui';

import s from './Post.module.scss';

interface PostProps {
  title: string;
  body: string;
}

export const Post: React.FC<PostProps> = ({ body, title }) => (
  <article className={s.container}>
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
      className={s.body}
    >
      {body}
    </Typography>
  </article>
);

import { Fragment } from 'react';
import { redirect } from 'next/navigation';

import { Comment, Post } from '~/components';
import { Divider, Typography } from '~/components/ui';
import { getPostsId, getPostsIdComments } from '~/utils/api';
import { ROUTES } from '~/utils/constants';

import s from './page.module.scss';

interface PostPageProps {
  params: { postId: string };
}

export const PostPage: React.FC<PostPageProps> = async ({ params }) => {
  const postId = Number(params.postId);
  const getPostsIdResponse = await getPostsId({ params: { id: postId } });

  if (!getPostsIdResponse.success) {
    redirect(ROUTES.HOME);
  }

  const getPostIdCommentsResponse = await getPostsIdComments({ params: { id: postId } });

  return (
    <main className={s.container}>
      <Post
        id={getPostsIdResponse.data.id}
        body={getPostsIdResponse.data.body}
        title={getPostsIdResponse.data.title}
      />
      <Divider />
      <Typography
        component="h2"
        variant="title.h3"
      >
        Комментарии
      </Typography>
      {getPostIdCommentsResponse.data.map((comment) => (
        <Fragment key={comment.id}>
          <Divider variant="extra-light" />
          <Comment
            key={comment.id}
            body={comment.body}
            email={comment.email}
            name={comment.name}
          />
        </Fragment>
      ))}
    </main>
  );
};

export default PostPage;

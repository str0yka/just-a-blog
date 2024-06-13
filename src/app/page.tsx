import Link from 'next/link';

import { Post } from '~/components';
import { getPosts } from '~/utils/api';
import { ROUTES } from '~/utils/constants';

import s from './page.module.scss';

export const HomePage = async () => {
  const getPostsResponse = await getPosts();

  return (
    <main className={s.container}>
      {getPostsResponse.data.map((post) => (
        <Link
          key={post.id}
          href={ROUTES.POST(post.id)}
        >
          <Post
            body={post.body}
            title={post.title}
          />
        </Link>
      ))}
    </main>
  );
};

export default HomePage;

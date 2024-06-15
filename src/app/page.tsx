import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Post } from '~/components';
import { getPosts } from '~/utils/api';
import { ROUTES, SEARCH_PARAMS } from '~/utils/constants';

import { Pagination } from './_components';

import s from './page.module.scss';

interface HomePageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const MAX_POST_COUNT = 20;
const DEFAULT_PAGE = 1;

const HomePage: React.FC<HomePageProps> = async ({ searchParams }) => {
  const getPostsResponse = await getPosts();

  const page = Math.floor(Number(searchParams?.[SEARCH_PARAMS.PAGE])) || DEFAULT_PAGE;
  const totalPages = Math.ceil(getPostsResponse.data.length / MAX_POST_COUNT);
  const posts = getPostsResponse.data.slice((page - 1) * MAX_POST_COUNT, page * MAX_POST_COUNT);

  if (!posts.length) {
    redirect(ROUTES.HOME);
  }

  return (
    <main className={s.container}>
      <section className={s.list}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={ROUTES.POSTS(post.id)}
            className={s['list-item']}
          >
            <Post
              body={post.body}
              title={post.title}
              truncateBody
            />
          </Link>
        ))}
      </section>
      <div className={s['paggination-container']}>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          siblingCount={3}
        />
      </div>
    </main>
  );
};

export default HomePage;

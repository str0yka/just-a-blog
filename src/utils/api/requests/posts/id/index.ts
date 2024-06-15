import { api } from '~/utils/api/instance';

export interface GetPostsIdParams {
  id: number;
}

export type GetPostsIdResponse = Post;

export type GetPostsIdRequestConfig = RequestConfig<GetPostsIdParams>;

export const getPostsId = async ({ params, config }: GetPostsIdRequestConfig) =>
  api.get<GetPostsIdResponse>(`/posts/${params.id}`, config);

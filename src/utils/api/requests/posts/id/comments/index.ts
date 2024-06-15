import { api } from '~/utils/api/instance';

export interface GetPostsIdCommentsParams {
  id: number;
}

export type GetPostsIdCommentsResponse = PostComment[];

export type GetPostsIdCommentsRequestConfig = RequestConfig<GetPostsIdCommentsParams>;

export const getPostsIdComments = async ({ params, config }: GetPostsIdCommentsRequestConfig) =>
  api.get<GetPostsIdCommentsResponse>(`/posts/${params.id}/comments`, config);

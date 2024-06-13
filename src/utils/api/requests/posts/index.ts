import { api } from '../../instance';

export type GetPostsResponse = Post[];

export type GetPostsRequestConfig = RequestConfig;

export const getPosts = async ({ config }: GetPostsRequestConfig = {}) =>
  api.get<GetPostsResponse>('/posts', config);

import { mockApi } from '../../instance';

export interface PostLoginParams {
  username: string;
  password: string;
}

export interface PostLoginResponse {
  user: User;
}

export type PostLoginRequestConfig = RequestConfig<PostLoginParams>;

export const postLogin = async ({ params, config }: PostLoginRequestConfig) =>
  mockApi.post<PostLoginResponse>('/login', params, config);

import { mockApi } from '~/utils/api/instance';

export interface PostLogoutResponse {
  success: true;
}

export type PostLogoutRequestConfig = RequestConfig;

export const postLogout = async ({ config }: PostLogoutRequestConfig = {}) =>
  mockApi.post<PostLogoutResponse>('/logout', {}, config);

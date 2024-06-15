export const ROUTES = {
  HOME: '/',
  AUTH: '/auth',
  LOGOUT: '/logout',
  POSTS: (postId: number) => `/${postId}`,
};

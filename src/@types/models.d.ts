interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  id: number;
  username: string;
}

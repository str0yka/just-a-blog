interface PostPageProps {
  params: { postId: string };
}

export const PostPage: React.FC<PostPageProps> = ({ params }) => <h1>{params.postId}</h1>;

export default PostPage;

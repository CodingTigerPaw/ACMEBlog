import PostDetailsClient from "./components/PostDetailsClient";

const PostDetails = async ({ params }: { params: { postId: string } }) => {
  const { postId } = await params;
  return <PostDetailsClient id={postId} />;
};

export default PostDetails;

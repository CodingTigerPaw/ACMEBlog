import PostDetailsClient from "./components/PostDetailsClient";

const PostDetails = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  return <PostDetailsClient id={postId} />;
};

export default PostDetails;

import PostDetailsClient from "./components/PostDetailsClient";

type pageProps = {
  params: { postId: string };
};
const PostDetails = async (props: pageProps) => {
  const { postId } = await props.params;
  return <PostDetailsClient id={postId} />;
};

export default PostDetails;

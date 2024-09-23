import { useSelector } from "react-redux";
import {
  selectPostIds,
  useGetPostsQuery,
} from "../features/posts/postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    error
} = useGetPostsQuery()

  const orderedPosyIds = useSelector(selectPostIds);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = orderedPosyIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section className="w-full pb-10">{content}</section>;
};
export default PostsList;

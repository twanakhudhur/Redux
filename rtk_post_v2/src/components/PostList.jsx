import { useSelector } from "react-redux";
import {
  // selectAllPosts,
  selectPostIds,
  getPostsStatus,
  getPostsError,
} from "../features/posts/postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  // const posts = useSelector(selectAllPosts);
  const orderedPosyIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "succeeded") {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => (
    //   <PostsExcerpt key={post.id} post={post} />
    // ));
    content = orderedPosyIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section className="w-full pb-10">{content}</section>;
};
export default PostsList;

import { Link, useNavigate, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { useSelector } from "react-redux";
import { selectPostById } from "../features/posts/postsSlice";
import { MdEdit, MdDelete } from "react-icons/md";
import { useDeletePostMutation } from "../features/posts/postsSlice";

export default function Post() {
  const { postId } = useParams();
  
  
  const navigate = useNavigate();
  const [deletePost] = useDeletePostMutation();

  const post = useSelector((state) => selectPostById(state,postId));

  const onDeletePostClicked = async () => {
    try {
      await deletePost({ id: post.id }).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    }
  };

  if (!post) {
    return (
      <section className="px-4 py-6 border-b border-slate-800">
        <h2 className="font-semibold capitalize">Post not found!</h2>
      </section>
    );
  }
  return (
    <>
      <div className="flex justify-end w-full pt-4 gap-2 text-lg text-white">
        <Link
          to={`/post/${postId}/edit`}
          className="hover:text-green-500 p-1 border border-slate-600 rounded-md hover:border-green-500"
        >
          <MdEdit />
        </Link>
        <button
          onClick={onDeletePostClicked}
          className="hover:text-red-500 p-1 border border-slate-600 rounded-md hover:border-red-500"
        >
          <MdDelete />
        </button>
      </div>
      <article className="px-4 py-6 border-b border-slate-800">
        <h3 className="font-semibold text-lg capitalize">{post.title}</h3>
        <p className="my-3">{post.body}</p>
        <p className="text-xs font-thin">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </>
  );
}

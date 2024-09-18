import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

export default function PostsExcerpt({ post }) {
  return (
    <article  className="px-4 py-6 border-b border-slate-800">
      <h3 className="font-semibold capitalize">{post.title}</h3>
      <p className="my-3">{post.body.substring(0, 100)}</p>
      <p className="text-xs font-thin">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
}

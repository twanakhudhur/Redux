import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { selectAllPosts } from "../features/posts/postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} className="px-4 py-6 border-b border-slate-800">
            <h3 className="font-semibold capitalize">{post.title}</h3>
            <p className="my-3">{post.content.substring(0, 100)}</p>
            <p className="text-xs font-thin">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section className="w-full pb-10">
            <h2 className="text-white text-xl mb-5 font-bold ">Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList
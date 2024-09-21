import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../features/users/usersSlice";
import { selectPostsByUser } from "../features/posts/postsSlice";

export default function User() {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, Number(userId)));

  //   const postsForUser = useSelector((state) => {
  //     const allPosts = selectAllPosts(state);
  //     return allPosts.filter((post) => post.userId === Number(userId));
  //   });
  const postsForUser = useSelector((state) =>
    selectPostsByUser(state, Number(userId))
  );

  const postTitles = postsForUser?.map((post) => (
    <li className="hover:text-white" key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <section className="text-center">
      <h2 className="font-semibold text-2xl mt-3">{user?.name}</h2>

      <ol className="space-y-2 mt-8 text-slate-400 list-decimal text-start">
        {postTitles}
      </ol>
    </section>
  );
}

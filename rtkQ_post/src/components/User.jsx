import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectUserById } from "../features/users/usersSlice";
import { useGetPostsByUserIdQuery } from "../features/posts/postsSlice";

export default function User() {
  const { userId } = useParams();
  const user = useSelector((state) => selectUserById(state, userId));

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids?.map((id) => (
      <li className="hover:text-white" key={id}>
        <Link to={`/post/${id}`}>{entities[id].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <section className="text-center">
      <h2 className="font-semibold text-2xl mt-3">{user?.name}</h2>

      <ol className="space-y-2 mt-8 text-slate-400 list-decimal text-start">
        {content}
      </ol>
    </section>
  );
}

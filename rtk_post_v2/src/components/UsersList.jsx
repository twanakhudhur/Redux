import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";
import { Link } from "react-router-dom";

export default function UsersList() {
  const users = useSelector(selectAllUsers);

  const renderedUsers = users.map((user) => (
    <li key={user.id} className="hover:text-white">
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section className="text-center">
      <h2 className="font-semibold text-2xl mt-3">Users</h2>

      <ul className="space-y-2 mt-8 text-slate-400">{renderedUsers}</ul>
    </section>
  );
}

import { useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";
import { Link } from "react-router-dom";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId.toString());

  return (
    <span>
      by{" "}
      {author ? (
        <Link to={`/users/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown author"
      )}
    </span>
  );
};
export default PostAuthor;

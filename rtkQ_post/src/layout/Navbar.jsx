import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-500 px-[3%] h-20 flex justify-between items-center">
      <Link to={"/"} className="uppercase font-bold text-2xl text-white">
        Blog Post
      </Link>
      <ul className="flex items-center gap-3 text-slate-400">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            hover:text-white
            ${isActive ? "text-white" : "text-slate-400"}
            `
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `
            hover:text-white
            ${isActive ? "text-white" : "text-slate-400"}
            `
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/add-post"
          className={({ isActive }) =>
            `
            hover:text-white
            ${isActive ? "text-white" : "text-slate-400"}
            `
          }
        >
          Add Post
        </NavLink>
      </ul>
    </nav>
  );
}

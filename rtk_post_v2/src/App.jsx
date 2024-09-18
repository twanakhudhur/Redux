import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostList";

function App() {
  return (
    <main className="flex flex-col justify-start items-center w-fit md:w-[50%] mx-auto text-slate-300">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;

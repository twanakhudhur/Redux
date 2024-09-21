import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostList";
import RootLayout from "./layout/RootLayout";
import NotFound from "./components/NotFound";
import Post from "./components/Post";
import EditPostForm from "./components/EditPostForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <PostsList />,
        },
        {
          path: "post",
          children: [
            {
              path: ":postId",
              element: <Post />,
            },
            {
              path: ":postId/edit",
              element: <EditPostForm />,
            },
          ],
        },
        {
          path: "add-post",
          element: <AddPostForm />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DummyComponent, PostsPage } from "./pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/",
    element: <DummyComponent />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

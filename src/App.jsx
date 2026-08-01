import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";

function App() {
  let route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;

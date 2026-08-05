import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import ProductVerification from "./Pages/ProductVerification/ProductVerification";
import Terms from "./Pages/Terms/Terms";
import CookiePolicy from "./Pages/CookiePolicy/CookiePolicy";
import ModifyCookies from "./Pages/ModifyCookies/ModifyCookies";

function App() {
  let route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "product-verification", element: <ProductVerification /> },
        { path: "terms", element: <Terms /> },
        { path: "cookie-policy", element: <CookiePolicy /> },
        { path: "modify-cookies", element: <ModifyCookies /> },
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

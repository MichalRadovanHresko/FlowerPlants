import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import DefaultPage from "./views/DefaultPage";
import MyPlants from "./views/MyPlants";
import Create from "./views/Create";
import Update from "./views/Update";
import About from "./views/About";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DefaultPage />,
        },
        {
          path: "/myplants",
          element: <MyPlants />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/update/:id",
          element: <Update />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ],
  { basename: "/FlowerPlants" },
);

export default function App() {
  return <RouterProvider router={router} />;
}

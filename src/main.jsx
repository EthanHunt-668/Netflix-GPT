import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error.jsx";
import Body from "./components/body.jsx";
import App from "./App.jsx";
import Browse from "./components/browse.jsx";
import TrailerPlayer from "./components/TrailerPlayer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Browse",
        element: <Browse />,
      },
      {
        path:"/Trailer",
        element:<TrailerPlayer/>,
      }
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

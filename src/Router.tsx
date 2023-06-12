import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Root from "./routes/Root";
import Popular from "./routes/Movie/Popular";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Popular />,
      },
    ],
  },
]);

export default router;

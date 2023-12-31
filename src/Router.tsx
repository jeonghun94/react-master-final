import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Root from "./routes/Root";
import Popular from "./routes/Movie/Popular";
import CommingSoon from "./routes/Movie/CommingSoon";
import NowPlaying from "./routes/Movie/NowPlaying";
import Search from "./routes/Movie/Search";

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
      {
        path: "comming-soon",
        element: <CommingSoon />,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;

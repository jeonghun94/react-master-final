import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/NotFound";
import Root from "./routes/Root";
import Popular, { Loader as PopularLoader } from "./routes/Movie/Popular";
import CommingSoon, {
  Loader as CommingSoonLoader,
} from "./routes/Movie/CommingSoon";
import NowPlaying, {
  Loader as NowPlayingLoader,
} from "./routes/Movie/NowPlaying";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Popular />,
        loader: PopularLoader,
      },
      {
        path: "comming-soon",
        element: <CommingSoon />,
        loader: CommingSoonLoader,
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        loader: NowPlayingLoader,
      },
    ],
  },
]);

export default router;

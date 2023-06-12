import { useQuery } from "react-query";
import { IAPIResponse, getNowPlaying } from "../../api";
import Movies from "../../components/Movies";

const NowPlaying = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["movies", "popular"],
    getNowPlaying
  );

  return isLoading ? <div>loading...</div> : <Movies data={data!} />;
};

export default NowPlaying;

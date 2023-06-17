import { useQuery } from "react-query";
import { IAPIResponse, getComingSoon } from "../../api";
import Movies from "../../components/Movies";

const CommingSoon = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["movies", "popular"],
    getComingSoon,
    {
      refetchOnWindowFocus: false,
    }
  );

  return isLoading ? <div>loading...</div> : <Movies data={data!} />;
};

export default CommingSoon;

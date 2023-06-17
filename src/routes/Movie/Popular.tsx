import { useQuery } from "react-query";
import { IAPIResponse, getPopular } from "../../api";
import Movies from "../../components/Movies";

const Popular = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["movies", "popular"],
    getPopular,
    {
      refetchOnWindowFocus: false,
    }
  );

  return isLoading ? <div>loading...</div> : <Movies data={data!} />;
};

export default Popular;

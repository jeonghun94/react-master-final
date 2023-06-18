import { useQuery } from "react-query";
import { IAPIResponse, getComingSoon } from "../../api";
import Movies from "../../components/Movies";

const CommingSoon = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["movies", "comming-soon"],
    getComingSoon
  );

  return isLoading ? <div>loading...</div> : <Movies data={data!} />;
};
export default CommingSoon;

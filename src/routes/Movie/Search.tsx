import { useQuery } from "react-query";
import { getComingSoon, searchMovies } from "../../api";
import Movies from "../../components/Movies";
import { useLocation } from "react-router-dom";

export async function Loader() {
  const data = await getComingSoon();
  return data;
}

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  const { data, isLoading } = useQuery(["search", keyword], () =>
    searchMovies(keyword + "")
  );

  if (isLoading) return <div>loading...</div>;

  return <Movies data={data} />;
}

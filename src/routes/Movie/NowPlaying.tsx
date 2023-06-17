import { getNowPlaying } from "../../api";
import Movies from "../../components/Movies";
import { useLoaderData } from "react-router-dom";

export async function Loader() {
  const data = await getNowPlaying();
  return data;
}

export default function NowPlaying() {
  const data = useLoaderData();
  return <Movies data={data} />;
}

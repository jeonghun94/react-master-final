import { getPopular } from "../../api";
import Movies from "../../components/Movies";
import { useLoaderData } from "react-router-dom";

export async function Loader() {
  const data = await getPopular();
  return data;
}

export default function Popular() {
  const data = useLoaderData();
  return <Movies data={data} />;
}

import { getComingSoon } from "../../api";
import Movies from "../../components/Movies";
import { useLoaderData } from "react-router-dom";

export async function Loader() {
  const data = await getComingSoon();
  return data;
}

export default function CommingSoon() {
  const data = useLoaderData();
  return <Movies data={data} />;
}

import { useQuery } from "react-query";
import { IAPIResponse, getComingSoon, getNowPlaying, getPopular } from "./api";
import { createGlobalStyle } from "styled-components";

export const useMultiQuery = () => {
  const popular = useQuery<IAPIResponse>(["movies", "nowPlaying"], getPopular);
  const commingSoon = useQuery<IAPIResponse>(
    ["movies", "commingSoon"],
    getComingSoon
  );
  const nowPlaying = useQuery<IAPIResponse>(
    ["movies", "nowPlaying"],
    getNowPlaying
  );

  return [popular, commingSoon, nowPlaying];
};

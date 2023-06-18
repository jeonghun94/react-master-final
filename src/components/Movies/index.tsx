import Layout from "../Layout";
import {
  // IAPIResponse,
  IMovie,
  IMovieDetail,
  getMovie,
  makeImagePath,
} from "../../api";
import { useState } from "react";
import { useQuery } from "react-query";
import MovieDetail from "../MovieDetail";
import { Container, Movie, MovieImage, MovieTitle } from "./styled";

const containerVariants = {
  start: { opacity: 1, scale: 0 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const movieVariants = {
  start: { y: 20, opacity: 0 },
  end: {
    y: 0,
    opacity: 1,
  },
};

interface MoviesProps {
  data: any;
}

const Movies = ({ data }: MoviesProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<string>("");

  const { data: movieDetailData, isLoading } = useQuery<IMovieDetail>(
    ["movie", movieId],
    () => getMovie(movieId),
    {
      enabled: movieId !== "",
    }
  );

  const handleMovieClick = (id: string) => {
    setIsClicked((prev) => !prev);
    setMovieId(id);
  };

  return (
    <Layout>
      {data?.results.length > 0 ? (
        <Container variants={containerVariants} initial="start" animate="end">
          {data?.results.map(
            (movie: IMovie) =>
              movie.backdrop_path && (
                <Movie
                  key={movie.id}
                  variants={movieVariants}
                  whileHover={{
                    marginTop: -15,
                    marginBottom: 15,
                  }}
                  onClick={() => handleMovieClick(String(movie.id))}
                >
                  <MovieImage
                    src={makeImagePath(movie.poster_path)}
                    alt={movie.title}
                  />
                  <MovieTitle>{movie.title}</MovieTitle>
                </Movie>
              )
          )}

          <MovieDetail
            data={movieDetailData}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
            isLoading={isLoading}
          />
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          조회된 데이터가 없습니다
        </div>
      )}
    </Layout>
  );
};

export default Movies;

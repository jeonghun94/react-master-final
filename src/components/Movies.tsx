import Layout from "./Layout";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  IAPIResponse,
  IMovie,
  IMovieDetail,
  getMovie,
  makeImagePath,
} from "../api";
import { useState } from "react";
import { useQuery } from "react-query";
import MovieDetail from "./MovieDetai";

const Container = styled(motion.div)`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const Movie = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1rem;
`;

const MovieImage = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const MovieTitle = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
`;

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
  data: IAPIResponse;
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
      <Container variants={containerVariants} initial="start" animate="end">
        {data?.results.map((movie: IMovie) => (
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
        ))}

        <MovieDetail
          data={movieDetailData}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
          isLoading={isLoading}
        />
      </Container>
    </Layout>
  );
};

export default Movies;

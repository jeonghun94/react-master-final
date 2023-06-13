import Layout from "./Layout";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IAPIResponse, IMovie, makeImagePath } from "../api";
import ContentsDetail from "../routes/Movie/Detai";

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
  // transition: opacity 0.3s ease-in-out;
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

interface IProps {
  data: IAPIResponse;
}

const Movies = ({ data }: IProps) => {
  return (
    <Layout>
      <Container variants={containerVariants} initial="start" animate="end">
        {data?.results.map((movie: IMovie) => (
          <Movie
            key={movie.id}
            variants={movieVariants}
            whileHover={{
              marginTop: -15,
            }}
            onClick={() => {
              console.log(movie);
            }}
          >
            <MovieImage
              src={makeImagePath(movie.poster_path)}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Movie>
        ))}
        <ContentsDetail type="movie" />
      </Container>
    </Layout>
  );
};

export default Movies;

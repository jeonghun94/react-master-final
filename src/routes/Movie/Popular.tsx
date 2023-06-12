import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { IAPIResponse, IMovie, getPopular } from "../../api";
import Layout from "../../components/Layout";
import styled from "styled-components";

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
  transition: opacity 0.3s ease-in-out;

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
const Popular = () => {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["movies", "popular"],
    getPopular
  );

  return isLoading ? (
    <h1>loading</h1>
  ) : (
    <Layout>
      <Container variants={containerVariants} initial="start" animate="end">
        {data?.results.map((movie: IMovie) => (
          <Movie
            key={movie.id}
            variants={movieVariants}
            whileHover={{
              marginTop: -15,
            }}
          >
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Movie>
        ))}
      </Container>
    </Layout>
  );
};

export default Popular;

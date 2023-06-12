import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { IAPIResponse, IMovie, getPopular } from "../../api";
import Layout from "../../components/Layout";
import styled from "styled-components";

const Container = styled.div`
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

  &:hover {
    opacity: 0.7;
  }

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

const Popular = () => {
  const popular = useQuery<IAPIResponse>(["movies", "popular"], getPopular);

  return (
    <Layout>
      <Container>
        {popular.data?.results.map((movie: IMovie) => (
          <Movie
            key={movie.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{
              y: -15,
              opacity: 0.8,
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

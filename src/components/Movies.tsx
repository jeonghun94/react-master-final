import Layout from "./Layout";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
  IAPIResponse,
  IMovie,
  IMovieDetail,
  getMovie,
  makeBgPath,
  makeImagePath,
} from "../api";
import { useState } from "react";
import { useQuery } from "react-query";
import { formattedNumber } from "../utils";
import { Link } from "react-router-dom";

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

interface IProps {
  data: IAPIResponse;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const MovieDetailContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 450px;
  width: 30vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #fff;
`;

const MovieDetailImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  flex: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const MovieDetialInfo = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const MoiveDetailTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const MoiveDetailOverview = styled.p`
  font-size: 1rem;
  font-weight: 400;
  white-space: normal;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

const MovieDetailInfoTilte = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const MovieDetailInfoText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
`;

const Movies = ({ data }: IProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<string>("");

  const { data: movieDetailData, isLoading } = useQuery<IMovieDetail>(
    ["movie", movieId],
    () => getMovie(movieId)
  );

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
            onClick={() => {
              setIsClicked(!isClicked);
              setMovieId(movie.id + "");
            }}
          >
            <MovieImage
              src={makeImagePath(movie.poster_path)}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </Movie>
        ))}
        <AnimatePresence>
          {isClicked && (
            <>
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsClicked(!isClicked)}
              />
              <MovieDetailContainer
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                exit={{ y: 1000 }}
              >
                <MovieDetailImage
                  src={makeBgPath(movieDetailData?.backdrop_path!)}
                  alt={movieDetailData?.title!}
                />
                <MovieDetialInfo>
                  <MoiveDetailTitle>{movieDetailData?.title}</MoiveDetailTitle>
                  <MoiveDetailOverview>
                    {movieDetailData?.overview}
                  </MoiveDetailOverview>
                  <MovieDetailInfoTilte>
                    Budget:{" "}
                    <MovieDetailInfoText>
                      {formattedNumber(Number(movieDetailData?.budget))}
                    </MovieDetailInfoText>
                  </MovieDetailInfoTilte>
                  <MovieDetailInfoTilte>
                    Revenue:{" "}
                    <MovieDetailInfoText>
                      {formattedNumber(Number(movieDetailData?.revenue))}
                    </MovieDetailInfoText>
                  </MovieDetailInfoTilte>
                  <MovieDetailInfoTilte>
                    Runtime:{" "}
                    <MovieDetailInfoText>
                      {movieDetailData?.runtime} minutes
                    </MovieDetailInfoText>
                  </MovieDetailInfoTilte>
                  <MovieDetailInfoTilte>
                    Rating:{" "}
                    <MovieDetailInfoText>
                      {movieDetailData?.vote_average}
                    </MovieDetailInfoText>
                  </MovieDetailInfoTilte>
                  <MovieDetailInfoTilte>
                    Hompeage:{" "}
                    <MovieDetailInfoText>
                      <Link
                        style={{
                          textDecoration: "underline",
                        }}
                        to={movieDetailData?.homepage + ""}
                        target="_blank"
                      >
                        {movieDetailData?.homepage}
                      </Link>
                    </MovieDetailInfoText>
                  </MovieDetailInfoTilte>
                </MovieDetialInfo>
                <CloseButton onClick={() => setIsClicked(!isClicked)}>
                  X
                </CloseButton>
              </MovieDetailContainer>
            </>
          )}
        </AnimatePresence>
      </Container>
    </Layout>
  );
};

export default Movies;

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { IMovieDetail, makeBgPath } from "../api";
import { formattedNumber } from "../utils";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

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
  position: fixed;
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

const MovieDetailInfo = styled.div`
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
  font-weight: 700;
  margin-bottom: 1rem;
`;

const MoiveDetailOverview = styled.p`
  font-size: 1rem;
  font-weight: 400;
  white-space: normal;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

const MovieDetailInfoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const MovieDetailInfoText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  // color: ${(props) => props.theme.bgColor};
  color: #c2c2c2;
  font-size: 2rem;
  border: none;
  cursor: pointer;
`;

interface MovieDetailProps {
  isClicked: boolean;
  isLoading: boolean;
  data: IMovieDetail | undefined;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovieDetail = ({
  isClicked,
  isLoading,
  data,
  setIsClicked,
}: MovieDetailProps) => {
  return (
    <AnimatePresence>
      {isClicked &&
        (isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsClicked(!isClicked)}
            />
            <MovieDetailContainer
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{
                duration: 0.5,
              }}
            >
              <MovieDetailImage
                src={makeBgPath(data?.backdrop_path!)}
                alt={data?.title!}
              />
              <MovieDetailInfo>
                <MoiveDetailTitle>{data?.title}</MoiveDetailTitle>
                <MoiveDetailOverview>{data?.overview}</MoiveDetailOverview>
                <MovieDetailInfoTitle>
                  Budget:{" "}
                  <MovieDetailInfoText>
                    {formattedNumber(Number(data?.budget))}
                  </MovieDetailInfoText>
                </MovieDetailInfoTitle>
                <MovieDetailInfoTitle>
                  Revenue:{" "}
                  <MovieDetailInfoText>
                    {formattedNumber(Number(data?.revenue))}
                  </MovieDetailInfoText>
                </MovieDetailInfoTitle>
                <MovieDetailInfoTitle>
                  Runtime:{" "}
                  <MovieDetailInfoText>
                    {data?.runtime} minutes
                  </MovieDetailInfoText>
                </MovieDetailInfoTitle>
                <MovieDetailInfoTitle>
                  Rating:{" "}
                  <MovieDetailInfoText>
                    {data?.vote_average}
                  </MovieDetailInfoText>
                </MovieDetailInfoTitle>
                <MovieDetailInfoTitle>
                  Hompeage:{" "}
                  <MovieDetailInfoText>
                    <Link
                      style={{
                        textDecoration: "underline",
                      }}
                      to={data?.homepage || "#"}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {data?.homepage}
                    </Link>
                  </MovieDetailInfoText>
                </MovieDetailInfoTitle>
              </MovieDetailInfo>
              <CloseButton onClick={() => setIsClicked(!isClicked)}>
                <AiFillCloseCircle />
              </CloseButton>
            </MovieDetailContainer>
          </>
        ))}
    </AnimatePresence>
  );
};

export default MovieDetail;

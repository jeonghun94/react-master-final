import { AnimatePresence } from "framer-motion";
import { IMovieDetail, makeBgPath } from "../../api";
import { formattedNumber } from "../../utils";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  CloseButton,
  MoiveDetailOverview,
  MoiveDetailTitle,
  MovieDetailContainer,
  MovieDetailImage,
  MovieDetailInfo,
  MovieDetailInfoText,
  MovieDetailInfoTitle,
  Overlay,
} from "./styled";

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
                {data?.homepage && (
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
                )}
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

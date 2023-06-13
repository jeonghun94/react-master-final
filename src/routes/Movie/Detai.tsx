import { AnimatePresence, motion, useScroll } from "framer-motion";
import { PathMatch, useMatch, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { makeImagePath } from "../../api";
import { clickedState } from "../../atoms";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;
const BigMovie = styled(motion.div)`
  position: absolute;
  width: 40vw;
  height: 70vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.textColor};
`;
const BigCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
  position: relative;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  font-size: 46px;
  top: -80px;
`;

const BigOverview = styled.p`
  padding: 20px;
  top: -80px;
`;

const BigReleaseDate = styled.p`
  padding: 20px;
  margin-top: -50px;
`;

const BigCoverContainer = styled.div`
  position: absolute;
  top: 0;
  width: 40vw;
  height: 70vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  jeustify-content: center;
  padding: 20px;
`;

const BigCoverContainerLeft = styled.div``;
const BigCoverContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const Poster = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
`;

interface DetailProps {
  type: string;
}

const ContentsDetail = ({ type }: DetailProps) => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const pathMatch: PathMatch<string> | null = useMatch(
    type === "movie" ? "/movies/:id" : "/tv/:id"
  );
  const onOverlayClick = () => navigate(type === "movie" ? "/" : "/tv");
  const clickedMovie = useRecoilValue(clickedState);

  return (
    <AnimatePresence>
      {pathMatch ? (
        <>
          <Overlay
            onClick={onOverlayClick}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <BigMovie
            style={{ top: scrollY.get() + 100 }}
            layoutId={pathMatch.params.movieId}
          >
            {clickedMovie && (
              <>
                <BigCover
                //   style={{
                //     backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                //       clickedMovie.backdrop_path,
                //       "w500"
                //     )})`,
                //   }}
                />
                <BigCoverContainer>
                  <BigCoverContainerLeft>
                    {/* <Poster
                      src={makeImagePath(clickedMovie.poster_path, "w500")}
                      alt={clickedMovie.title}
                    /> */}
                  </BigCoverContainerLeft>
                  <BigCoverContainerRight>
                    <BigTitle>
                      {/* {type === "movie"
                        ? clickedMovie.title
                        : clickedMovie.name} */}
                    </BigTitle>
                    {/* {clickedMovie.release_date && (
                      <BigReleaseDate>
                        {"Release: "}
                        {clickedMovie.release_date}
                      </BigReleaseDate>
                    )}
                    <BigOverview>{clickedMovie.overview}</BigOverview> */}
                  </BigCoverContainerRight>
                </BigCoverContainer>
              </>
            )}
          </BigMovie>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default ContentsDetail;

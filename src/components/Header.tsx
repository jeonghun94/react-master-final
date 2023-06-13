import styled from "styled-components";
import { Link, useLocation, useMatch } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "../atoms";
import { motion } from "framer-motion";

const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;

  a {
    font-size: 1rem;
    font-weight: 500;
    color: #999;
    padding-bottom: 3px;
  }
`;

const IconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

const Circle = styled(motion.span)`
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  border: 1px solid #999;
`;

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);
  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const location = useLocation();
  const pathName = location.pathname.slice(1).replaceAll(" ", "");

  const isActivePath = (path: string) => pathName === path;
  const getLinkStyles = (path: string) => ({
    color: isActivePath(path) ? (!isDarkMode ? "white" : "#222222") : "#999",
    fontWeight: isActivePath(path) ? "700" : "500",
  });

  const isPopular = useMatch("/");
  const isCommingSoon = useMatch("/comming-soon");
  const isNowPlaying = useMatch("/now-playing");

  return (
    <StyledHeader>
      <div></div>
      <LinkContainer>
        <Link style={getLinkStyles("")} to="/">
          POPULAR
          {isPopular && <Circle layoutId="circle" />}
        </Link>
        <Link style={getLinkStyles("comming-soon")} to="/comming-soon">
          COMMING SOON
          {isCommingSoon && <Circle layoutId="circle" />}
        </Link>
        <Link style={getLinkStyles("now-playing")} to="/now-playing">
          NOW PLAYING
          {isNowPlaying && <Circle layoutId="circle" />}
        </Link>
      </LinkContainer>
      <IconContainer onClick={handelDarkMode}>
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

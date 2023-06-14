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

const circleVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

interface NavePrpos {
  to: string;
  title: string;
}

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);
  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const location = useLocation();
  const pathName = location.pathname.slice(1).replaceAll(" ", "");

  console.log(pathName, "pathName");

  const isActivePath = (path: string) => pathName === path;
  const getLinkStyles = (path: string) => ({
    color: isActivePath(path) ? (!isDarkMode ? "white" : "#222222") : "#999",
    fontWeight: isActivePath(path) ? "700" : "500",
  });

  const NavLink = ({ to, title }: NavePrpos) => {
    const isActive = useMatch(to);
    return (
      <Link style={getLinkStyles(to.replace("/", ""))} to={to}>
        {title}
        {isActive && (
          <Circle
            variants={circleVariants}
            initial="start"
            animate="end"
            transition={{
              duration: 0.3,
            }}
            layoutId="circle"
          />
        )}
      </Link>
    );
  };

  return (
    <StyledHeader>
      <div></div>
      <LinkContainer>
        <NavLink to="/" title="POPULAR" />
        <NavLink to="/comming-soon" title="COMMING SOON" />
        <NavLink to="/now-playing" title="NOW PLAYING" />
      </LinkContainer>
      <IconContainer onClick={handelDarkMode}>
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

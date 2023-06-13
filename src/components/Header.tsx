import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms";

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

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);
  const handelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const location = useLocation();
  const pathName = location.pathname.slice(1).replaceAll(" ", "");

  const isActivePath = (path: string) => pathName === path;
  const getLinkStyles = (path: string) => ({
    color: isActivePath(path) ? "white" : "#999",
    fontWeight: isActivePath(path) ? "700" : "500",
  });
  return (
    <StyledHeader>
      <div></div>
      <LinkContainer>
        <Link style={getLinkStyles("")} to="/">
          POPULAR
        </Link>
        <Link style={getLinkStyles("comming-soon")} to="/comming-soon">
          COMMING SOON
        </Link>
        <Link style={getLinkStyles("now-playing")} to="/now-playing">
          NOW PLAYING
        </Link>
      </LinkContainer>
      <IconContainer onClick={handelDarkMode}>
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

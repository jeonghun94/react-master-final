import styled from "styled-components";
import NavLink from "./NavLink";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  // border: 1px solid red;
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

const IconContainer = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <StyledHeader>
      <div></div>
      <LinkContainer>
        <NavLink to="/">POPULAR</NavLink>
        <NavLink to="/comming-soon">COMMING SOON</NavLink>
        <NavLink to="/now-playing">NOW PLAYING</NavLink>
      </LinkContainer>
      <IconContainer
        onClick={handleDarkMode}
        whileHover={{ scale: 1.5, rotate: 360, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

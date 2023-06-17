import NavLink from "./NavLink";
import { useRecoilState } from "recoil";
import { themeState } from "../../atoms";
import { IconContainer, LinkContainer, StyledHeader } from "./styled";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

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
        whileHover={{ scale: 1.5, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

import { Link } from "react-router-dom";
import styled from "styled-components";

import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { themeState } from "../atoms";

const StyledHeader = styled.div`
  width: 100%;
  display: grid; // grid 속성 추가
  grid-template-columns: 1fr 5fr 1fr; // 3개의 열로 구성
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  // border: 1px dashed white;
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
    // border-bottom: 2px solid red;
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

  return (
    <StyledHeader>
      <div></div>
      <LinkContainer>
        <Link
          to="/"
          style={{
            fontWeight: 700,
            color: "white",
          }}
        >
          POPULAR
        </Link>
        <Link to="/comming-soon">COMMING SOON</Link>
        <Link to="/now-playing">NOW PLAYING</Link>
      </LinkContainer>
      <IconContainer onClick={handelDarkMode}>
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>
    </StyledHeader>
  );
};

export default Header;

import NavLink from "./NavLink";
import { useRecoilState } from "recoil";
import { themeState } from "../../atoms";
import {
  IconContainer,
  LinkContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
  StyledHeader,
} from "./styled";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Overlay } from "../MovieDetail/styled";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(themeState);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <StyledHeader>
      <IconContainer
        onClick={toggleSearch}
        whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        <FaSearch
          style={{
            marginTop: "5px",
          }}
        />
      </IconContainer>
      <LinkContainer>
        <NavLink to="/">POPULAR</NavLink>
        <NavLink to="/comming-soon">COMMING SOON</NavLink>
        <NavLink to="/now-playing">NOW PLAYING</NavLink>
      </LinkContainer>
      <IconContainer
        onClick={handleDarkMode}
        whileHover={{ scale: 1.3, transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContainer>

      <AnimatePresence>
        {searchOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <SearchContainer
              initial={{ y: -1000 }}
              animate={{ y: 0, marginTop: "800px" }}
              exit={{ y: -1000 }}
              transition={{
                duration: 0.5,
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <SearchInput
                    {...register("keyword", {
                      required: true,
                      minLength: 1,
                    })}
                    placeholder="Search for movie"
                  />
                  <SearchButton type="submit">검색</SearchButton>
                </form>
              </div>
            </SearchContainer>
          </>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
};

export default Header;

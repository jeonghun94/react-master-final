import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  // border: 1px solid red;
`;

export const LinkContainer = styled.div`
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

export const IconContainer = styled(motion.button)`
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

export const ActiveBar = styled(motion.span)`
  width: 100%;
  height: 2px;
  margin-top: 5px;
  border-radius: 5px;
  bottom: -5px;
  background-color: ${(props) => props.theme.textColor};
`;

export const SearchContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 450px;
  width: 30vw;
  height: 18vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.bgColor};
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-size: 1rem;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.accentColor};
  &::placeholder {
    color: ${(props) => props.theme.textColor};
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.itemBgColor}};
  background-color: ${(props) => props.theme.buttonBgColor};
`;

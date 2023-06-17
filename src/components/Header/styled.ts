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

import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const Movie = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1rem;
`;

export const MovieImage = styled.img`
  width: 90%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const MovieTitle = styled.h1`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const MovieDetailContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  min-width: 450px;
  width: 30vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #fff;
`;

export const MovieDetailImage = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  flex: 2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const MovieDetailInfo = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const MoiveDetailTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const MoiveDetailOverview = styled.p`
  font-size: 1rem;
  font-weight: 400;
  white-space: normal;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
`;

export const MovieDetailInfoTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const MovieDetailInfoText = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  // color: ${(props) => props.theme.bgColor};
  color: #c2c2c2;
  font-size: 2rem;
  border: none;
  cursor: pointer;
`;

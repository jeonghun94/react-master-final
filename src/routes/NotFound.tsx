import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};

  a {
    color: black;
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textColor};
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404 Not Found</Title>
      <Link to="/">Go home &rarr;</Link>
    </Container>
  );
};

export default NotFound;

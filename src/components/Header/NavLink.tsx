import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { themeState } from "../../atoms";
import { darkTheme, lightTheme } from "../../theme";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const ActiveBar = styled(motion.span)`
  width: 100%;
  height: 2px;
  margin-top: 5px;
  border-radius: 5px;
  bottom: -5px;
  background-color: ${(props) => props.theme.textColor};
`;

const circleVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const NavLink = ({ to, children }: NavLinkProps) => {
  const isDarkMode = useRecoilValue(themeState);
  const isActive = useMatch(to);

  return (
    <Link
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: isActive ? 700 : 500,
        color: isActive
          ? !isDarkMode
            ? darkTheme.textColor
            : lightTheme.textColor
          : "#999",
      }}
      to={to}
    >
      {children}
      {isActive && (
        <ActiveBar
          variants={circleVariants}
          initial="start"
          animate="end"
          transition={{
            duration: 0.3,
          }}
          layoutId="circle"
        />
      )}
    </Link>
  );
};

export default NavLink;

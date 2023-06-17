import { Link, useMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "../../atoms";
import { darkTheme, lightTheme } from "../../theme";
import { ActiveBar } from "./styled";

const circleVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

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

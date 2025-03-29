import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "../ThemeContext";
import Logo from "../Logo";

interface ThemeProps {
  theme: "dark" | "light";
}

const Nav = styled.nav<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#eaeaea")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: background-color 0.3s ease-in-out;
`;

const ThemeButton = styled.button<ThemeProps>`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#eaeaea")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: 0.3s;
  font-family:
    Dubai Light,
    sans-serif;

  &:hover {
    background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#a3a3a3")};
    border-radius: 5px;
  }
`;

const NavLink = styled(Link)<ThemeProps>`
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  text-decoration: none;
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 18px;
  font-family:
    Dubai Light,
    sans-serif;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => (theme === "dark" ? "#333" : "#a3a3a3")};
    border-radius: 5px;
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  flex-grow: 1; /* Позволяет занять доступное пространство */
  justify-content: center;
  gap: 15px;
`;

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    console.log("Current theme:", theme); // Для отладки
  }, [theme]);
  return (
    <Nav theme={theme}>
      <Logo theme={theme} />
      <NavLinksWrapper>
        <NavLink theme={theme} to="/">
          Home
        </NavLink>
        <NavLink theme={theme} to="/profile">
          User
        </NavLink>
        <NavLink theme={theme} to="/login">
          Authorization
        </NavLink>
        <NavLink theme={theme} to="/register">
          Register
        </NavLink>
      </NavLinksWrapper>
      <ThemeButton theme={theme} onClick={toggleTheme}>
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </ThemeButton>
    </Nav>
  );
}

export default Navbar;

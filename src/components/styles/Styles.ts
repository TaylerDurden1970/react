import styled from "styled-components";

interface ThemeProps {
  theme: "dark" | "light";
}

const DarkThemeBG = "#151515";
const DarkThemeBG2 = "#222";
const LightThemeBG = "#fff";
const LightThemeBG2 = "#e4e4e4";

const DarkThemeFont = "#fff";
const LightThemeFont = "#000";

export const Container = styled.div<ThemeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 61px);
  background-color: ${({ theme }) =>
    theme === "dark" ? DarkThemeBG : LightThemeBG};
  color: ${({ theme }) => (theme === "dark" ? LightThemeBG : DarkThemeBG)};
  transition: background-color 0.3s ease-in-out;
`;

export const FormWrapper = styled.div<ThemeProps>`
  background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#e4e4e4")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-family:
    Dubai Light,
    sans-serif;
  font-size: 32px;
`;

export const Input = styled.input<ThemeProps>`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${({ theme }) => (theme === "dark" ? "#222" : "#f8f8f8")};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  outline: none;

  &:focus {
    border: 2px solid #6200ea;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #6200ea;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #7b1fa2;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

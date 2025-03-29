import styled from "styled-components";

interface ThemeProps {
  theme: "dark" | "light";
}

export const Container = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: calc(100vh - 61px);
  font-family:
    Dubai Light,
    sans-serif;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#151515" : "#f8f8f8"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: background-color 0.3s ease-in-out;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UploadButton = styled.button`
  padding: 10px;
  background: #ff0000;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #cc0000;
  }
`;
export const LogoutButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #d32f2f;
  }
`;

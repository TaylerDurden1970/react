import React, { useState } from "react";
import { useAuth } from "./authContext"; // Импортируем useAuth для получения информации о пользователе
import {
  Container,
  Avatar,
  UploadButton,
  LogoutButton,
} from "./styles/UserProfile.styles"; // Добавим LogoutButton
import { useTheme } from "./ThemeContext";

function UserProfile() {
  const { user, logout } = useAuth(); // Получаем информацию о пользователе и функцию logout
  const { theme } = useTheme();
  const handleLogout = () => {
    logout(); // Вызываем функцию logout, чтобы очистить состояние пользователя
  };

  return (
    <Container theme={theme}>
      <Avatar
        src="https://img.youtube.com/vi/cD4gmd41cW0/maxresdefault.jpg"
        alt="Avatar"
      />
      <h1>{user ? user.name : "Username"}</h1>{" "}
      {/* Отображаем имя пользователя */}
      <UploadButton>Upload Video</UploadButton>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}

export default UserProfile;

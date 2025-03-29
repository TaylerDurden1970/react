import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Для навигации
import { useTheme } from "../ThemeContext";

// Определяем интерфейс для пропсов
interface VideoCardProps {
  title: string;
  thumbnail: string;
  likes: number;
  views: number;
  url: string;
  variant?: "default" | "compact"; // Добавляем вариант отображения
}

// Стилизованные компоненты
const Card = styled.div<{
  themeMode: "dark" | "light";
  variant: "default" | "compact";
}>`
  background-color: ${({ themeMode }) =>
    themeMode === "dark" ? "#222" : "#eaeaea"};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === "compact" ? "row" : "column"};
  align-items: ${({ variant }) => (variant === "compact" ? "center" : "unset")};
  width: ${({ variant }) => (variant === "compact" ? "100%" : "auto")};
  padding: ${({ variant }) => (variant === "compact" ? "10px" : "0")};

  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img<{ variant: "default" | "compact" }>`
  width: ${({ variant }) => (variant === "compact" ? "120px" : "100%")};
  height: ${({ variant }) => (variant === "compact" ? "80px" : "180px")};
  object-fit: cover;
  border-radius: ${({ variant }) => (variant === "compact" ? "5px" : "0")};
`;

const Info = styled.div<{
  themeMode: "dark" | "light";
  variant: "default" | "compact";
}>`
  padding: ${({ variant }) => (variant === "compact" ? "0 10px" : "10px")};
  font-family: "Dubai Light", sans-serif;
  color: ${({ themeMode }) => (themeMode === "dark" ? "#fff" : "#000")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Title = styled.h3<{ variant: "default" | "compact" }>`
  font-size: ${({ variant }) => (variant === "compact" ? "14px" : "18px")};
  margin: 0;
  font-weight: bold;
  white-space: ${({ variant }) =>
    variant === "compact" ? "nowrap" : "normal"};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Stats = styled.div<{ variant: "default" | "compact" }>`
  margin-top: ${({ variant }) => (variant === "compact" ? "5px" : "10px")};
  font-size: ${({ variant }) => (variant === "compact" ? "12px" : "14px")};
  display: flex;
  justify-content: ${({ variant }) =>
    variant === "compact" ? "flex-start" : "space-between"};
  gap: ${({ variant }) => (variant === "compact" ? "10px" : "0")};
`;

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  thumbnail,
  likes,
  views,
  url,
  variant = "default", // По умолчанию обычный вид
}) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleClick = () => {
    navigate("/watch", { state: { title, url, likes, views } });
  };

  return (
    <Card themeMode={theme} variant={variant} onClick={handleClick}>
      <Thumbnail src={thumbnail} alt={title} variant={variant} />
      <Info themeMode={theme} variant={variant}>
        <Title variant={variant}>{title}</Title>
        <Stats variant={variant}>
          <span>👍 {likes}</span>
          <span>👁 {views}</span>
        </Stats>
      </Info>
    </Card>
  );
};

export default VideoCard;

import React, { useState } from "react";
import styled from "styled-components";
import VideoCard from "./styles/VideoCard";
import { useTheme } from "./ThemeContext";

// Тип для видео
interface Video {
  id: number;
  title: string;
  thumbnail: string;
  likes: number;
  views: number;
  url: string;
}

// Контейнер с учетом темы
const Container = styled.div<{ theme: string }>`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px);
  font-family:
    Dubai Light,
    sans-serif;
  font-weight: bold;

  background-color: ${({ theme }) =>
    theme === "dark" ? "#151515" : "#f8f8f8"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  transition: background-color 0.3s ease-in-out;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const SearchBar = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
`;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // Указываем, что useState хранит строку
  const { theme } = useTheme();

  const videos: Video[] = [
    // Явно указываем тип массива
    {
      id: 1,
      title: "Nua Nua",
      thumbnail: "https://img.youtube.com/vi/cD4gmd41cW0/maxresdefault.jpg",
      likes: 10,
      views: 200,
      url: "https://www.youtube.com/watch?v=cD4gmd41cW0",
    },
    {
      id: 2,
      title: "Papich Poyasnyaet",
      thumbnail: "https://img.youtube.com/vi/lZYCCoft1lg/maxresdefault.jpg",
      likes: 20,
      views: 300,
      url: "https://www.youtube.com/watch?v=lZYCCoft1lg",
    },
    {
      id: 3,
      title: "Degroid",
      thumbnail: "https://img.youtube.com/vi/GSuKhIQfQaU/maxresdefault.jpg",
      likes: 30,
      views: 500,
      url: "https://www.youtube.com/watch?v=GSuKhIQfQaU",
    },
    {
      id: 4,
      title: "Video 4",
      thumbnail: "https://img.youtube.com/vi/GSuKhIQfQaU/maxresdefault.jpg",
      likes: 40,
      views: 800,
      url: "https://www.youtube.com/watch?v=GSuKhIQfQaU",
    },
    {
      id: 5,
      title: "Video 5",
      thumbnail: "https://img.youtube.com/vi/GSuKhIQfQaU/maxresdefault.jpg",
      likes: 50,
      views: 1000,
      url: "https://www.youtube.com/watch?v=GSuKhIQfQaU",
    },
  ];

  // Фильтрация видео по названию
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container theme={theme}>
      <Title>Main Page</Title>

      {/* Поисковая строка */}
      <SearchBar
        type="text"
        placeholder="Search for videos..."
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(e.target.value)
        }
      />

      <VideoGrid>
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            likes={video.likes}
            views={video.views}
            url={video.url}
          />
        ))}
      </VideoGrid>
    </Container>
  );
};

export default Home;

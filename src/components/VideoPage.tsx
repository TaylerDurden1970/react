import React from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";
import VideoCard from "./styles/VideoCard";

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Выровняли по верхнему краю */
  justify-content: center;
  gap: 20px;
  background: ${({ theme }) => (theme === "dark" ? "#111" : "#fff")};
  padding: 30px;
  height: calc(100vh - 70px);
`;

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1; /* Растягивается, занимая доступное место */
  max-width: 1200px;
  background: ${({ theme }) => (theme === "dark" ? "#111" : "#fff")};
  //padding: 20px;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  background: ${({ theme }) => (theme === "dark" ? "#222" : "#e4e4e4")};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

const VideoInfoWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  padding: 20px;
  background: ${({ theme }) => (theme === "dark" ? "#222" : "#e4e4e4")};
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

const VideoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => (theme === "dark" ? "#ff7129" : "#700480")};
  margin-bottom: 10px;
`;

const VideoStats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1rem;
  color: ${({ theme }) => (theme === "dark" ? "#aaa" : "#151515")};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const IconButton = styled.button`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#ff7129" : "#700480"};
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  &:hover {
    background-color: #ff5722;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 450px;
`;

const suggestedVideos = [
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

function VideoPage() {
  const location = useLocation();
  const { title, url, likes, views } = location.state || {};
  const { theme } = useTheme();

  return (
    <PageContainer theme={theme}>
      <PlayerContainer theme={theme}>
        <PlayerWrapper theme={theme}>
          <ReactPlayer url={url} controls width="100%" height="500px" />
        </PlayerWrapper>
        <VideoInfoWrapper theme={theme}>
          <VideoTitle theme={theme}>{title}</VideoTitle>
          <VideoStats theme={theme}>
            <span>{views} Views</span>
            <span>{likes} Likes</span>
          </VideoStats>
          <ButtonContainer>
            <IconButton theme={theme}>👍 Like</IconButton>
            <IconButton theme={theme}>👎 Dislike</IconButton>
            <IconButton theme={theme}>🔗 Share</IconButton>
          </ButtonContainer>
        </VideoInfoWrapper>
      </PlayerContainer>
      <Sidebar>
        {suggestedVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            likes={video.likes}
            views={video.views}
            url={video.url}
            variant="compact"
          />
        ))}
      </Sidebar>
    </PageContainer>
  );
}

export default VideoPage;

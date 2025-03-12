import React from "react";
import styled from "styled-components";
import VideoCard from "./styles/VideoCard"; // Импортируем компонент

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`;

const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 10px;
`;

const VideoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 80%;
`;

const Home = () => {
    const videos = [
        { id: 1, title: "Video 1", thumbnail: "https://img.youtube.com/vi/cD4gmd41cW0/maxresdefault.jpg" },
        { id: 2, title: "Video 2", thumbnail: "https://img.youtube.com/vi/lZYCCoft1lg/maxresdefault.jpg" },
        { id: 3, title: "Video 3", thumbnail: "https://img.youtube.com/vi/GSuKhIQfQaU/maxresdefault.jpg" },
        { id: 4, title: "Video 4", thumbnail: "https://img.youtube.com/vi/GSuKhIQfQaU/maxresdefault.jpg" },
        { id: 5, title: "Video 5", thumbnail: "https://img.youtube.com/vi/GSuKhIQfQaU/maxresdefault.jpg" }
    ];

    return (
        <Container>
            <Title>Main Page</Title>
            <VideoGrid>
                {videos.map((video) => (
                    <VideoCard key={video.id} title={video.title} thumbnail={video.thumbnail} />
                ))}
            </VideoGrid>
        </Container>
    );
};

export default Home;

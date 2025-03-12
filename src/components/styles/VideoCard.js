import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #282828;
  padding: 15px;
  border-radius: 8px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  color: white;
`;

const VideoCard = ({ title, thumbnail }) => {
    return (
        <Card>
            <Thumbnail src={thumbnail} alt={title} />
            <Title>{title}</Title>
        </Card>
    );
};

export default VideoCard;

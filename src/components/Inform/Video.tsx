import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface Props {
  title?: string;
  viewCount?: number;
}

function Video({ title, viewCount }: Props) {
  let count = viewCount?.toLocaleString()

  return (
    <>
      <Container>
        <VideoImage />
        <VideoTitle>{title}</VideoTitle>
        <ViedoView>조회수 {count}회</ViedoView>
      </Container>
    </>
  );
}

export default Video;

const Container = styled.div`
  width: 240px;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
`;

const VideoImage = styled.div`
  width: 240px;
  height: 135px;
  border: none;
  border-radius: 14px;
  background: ${Colors.Gray200};
`;

const VideoTitle = styled.p`
  width: 230px;
  height: 50px;
  font-size: 16px;
  color: black;
`;

const ViedoView = styled.p`
  width: 230px;
  height: 20px;
  font-size: 14px;
  font-weight: lighter;
  color: ${Colors.Gray500};
`;

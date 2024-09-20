import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface Props {
  enter?: string;
  title?: string;
  explain?: string;
  onClickHandler?: () => void;
}

function News({ enter, title, explain, onClickHandler }: Props) {
  return (
    <>
      <Container>
        <Wrapper>
          <Entertainment onClick={onClickHandler}>{enter}</Entertainment>
          <NewsTitle onClick={onClickHandler}>{title}</NewsTitle>
          <NewsExplain onClick={onClickHandler}>{explain}</NewsExplain>
        </Wrapper>
        <NewsImage onClick={onClickHandler} />
      </Container>
    </>
  );
}

export default News;

const Container = styled.div`
  width: 750px;
  height: 150px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Wrapper = styled.div`
  width: 620px;
  height: 100px;
  gap: 20px;
  display: flex;
  justify-content: left;
  align-items: start;
  flex-direction: column;
`;

const Entertainment = styled.p`
  width: 600px;
  height: 22px;
  font-size: 16px;
  color: ${Colors.Gray600};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NewsTitle = styled.p`
  width: 600px;
  height: 26px;
  color: ${Colors.Blue500};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NewsExplain = styled.p`
  width: 600px;
  cursor: pointer;
  height: 42px;
  font-size: 16px;
  color: ${Colors.Gray500};

  &:hover {
    text-decoration: underline;
  }
`;

const NewsImage = styled.div`
  cursor: pointer;
  width: 120px;
  height: 120px;
  border: none;
  background: ${Colors.Gray500};
  border-radius: 15px;
  margin-left: auto;
`;

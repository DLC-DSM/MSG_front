import styled from "styled-components";
import { Colors } from "../../styles/colors";

function Footer() {
  return (
    <>
      <Background>
        <ButtonContainer>
          <ButtonWrapper>
            <TextButton>회사소개</TextButton>
            <TextButton>이용약관</TextButton>
            <TextButton>개인정보처리방침</TextButton>
          </ButtonWrapper>

          <TextContainer>
            <GrayText>주식회사 커머스 대표자 : 김패캠</GrayText>
            <GrayText>개인정보보호책임자 : 박다트</GrayText>
            <GrayText>사업자 등록 번호 : 111-22-3333</GrayText>
            <GrayText>
              입점문의 : <Accent>commerce@commerce.com</Accent>
            </GrayText>
          </TextContainer>
        </ButtonContainer>
      </Background>
    </>
  );
}

export default Footer;

const Background = styled.div`
  width: 100%;
  height: 200px;
  background: ${Colors.Gray50};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 800px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 80px;
`;

const TextButton = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.Gray500};
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: start;
  gap: 10px;
  flex-direction: column;
`;

const GrayText = styled.p`
  font-size: 16px;
  font-weight: lighter;
  color: ${Colors.Gray400};
`;

const Accent = styled.span`
  font-size: 16px;
  color: ${Colors.Gray500};
`;

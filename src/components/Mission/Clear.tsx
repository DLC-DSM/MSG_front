import styled from "styled-components";
import { Colors } from "../../styles/colors";
import { FaCircleCheck } from "react-icons/fa6";

function Clear() {
  return (
    <>
      <Background>
        <ClearContainer>
          <CheckIcon>
            <FaCircleCheck />
          </CheckIcon>
          <ClearText>
            축하해요!
            <br />
            오늘의 미션 성공
          </ClearText>
        </ClearContainer>
      </Background>
    </>
  );
}

export default Clear;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(white, ${Colors.LightBlue100});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
`;

const ClearContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid ${Colors.Blue500};
  gap: 20px;
`;

const CheckIcon = styled.p`
  font-size: 80px;
  color: ${Colors.Blue500};
`;

const ClearText = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: ${Colors.Blue500};
  text-align: center;
`;

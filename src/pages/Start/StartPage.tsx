import styled from "styled-components";
import { Colors } from "../../styles/colors";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  const toLoginHandler = () => {
    navigate("/login");
  };

  return (
    <Background>
      <TitleWrapper>
        <Title>
          계획적이게
          <br />
          편리하게
        </Title>
        <img src={Logo} width={150} />
      </TitleWrapper>
      <Button onClick={toLoginHandler}>시작하기</Button>
    </Background>
  );
}

export default StartPage;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(white, ${Colors.LightBlue50});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.p`
  color: ${Colors.Blue500};
  font-weight: lighter;
  font-size: 32px;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 200px;
  border-bottom: 1px solid ${Colors.Blue500};
  border-top: 1px solid ${Colors.Blue500};
  gap: 40px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: ${Colors.Blue500};
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: ${Colors.Blue600};
    transition: 200ms;
  }

  &:active {
    background: ${Colors.Blue700};
  }
`;

import styled from "styled-components";
import { Colors } from "../styles/colors";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Before() {
  const navigate = useNavigate();

  const toBeforeHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <Container onClick={toBeforeHandler}>
        <IoIosArrowBack />
      </Container>
    </>
  );
}

export default Before;

const Container = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border: 1px solid ${Colors.Gray500};
  border-radius: 12px;
  color: ${Colors.Gray500};
  padding-right: 1px;

  font-size: 24px;

  cursor: pointer;

  &:hover {
    background-color: ${Colors.Gray50};
  }
`;

import styled from "styled-components";
import { Colors } from "../../styles/colors";

interface inputs {
  type: string;
  label: string;
  placeholder: string;
  max: number;
  min: number;
}

function Input({ type, label, placeholder, max, min }: inputs) {
  if (type !== "number") {
    return (
      <>
        <Label>{label}</Label>
        <InputContainer>
          <InputBox
            type={type}
            placeholder={placeholder}
            minLength={min}
            3
            maxLength={max}
            autoComplete="off"
          />
        </InputContainer>
      </>
    );
  }
  return (
    <>
      <Label>{label}</Label>
      <InputContainer>
        <InputBox type={type} placeholder={placeholder} min={min} max={max} />
      </InputContainer>
    </>
  );
}

export default Input;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: black;
  padding: 0 5px;
`;

const InputContainer = styled.div`
  width: 350px;
  height: 35px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.Gray300};
  border-radius: 10px;
  background: ${Colors.Gray50};
`;


const InputBox = styled.input`
  width: 350px;
  height: 30px;
  padding: 5px;
  border: none;
  background: none;
  color: black;
  outline: none;
  font-size: 16px;
`;

const Icon = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
  color: ${Colors.Gray400};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

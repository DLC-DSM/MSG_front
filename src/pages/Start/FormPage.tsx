import styled from "styled-components"
import { Colors } from "../../styles/colors"
import Logo from "../../assets/Logo.png"
import Input from "../../components/common/Input"
import { useNavigate } from "react-router-dom"

function FormPage() {
    const navigate = useNavigate()

    const toMain = () => {
        navigate("/main")
    }

    return (
        <Background>
            <LogoWrapper>
                <img src={Logo} width={100} />
            </LogoWrapper>

            <TitleWrapper>
                <Title>설문조사</Title>
                <SubTitle>MSG와 함께 하는 것을 환영해요!</SubTitle>
            </TitleWrapper>

            <Form>
                <InputWrapper>
                    <SelectContainer>
                        <Label>즐기고 싶으신 취미는 무엇인가요?</Label>
                        <Selecter placeholder="취미를 선택해주세요">
                            <option value="">취미를 선택해주세요</option>
                            <option value="jogging">조깅</option>
                            <option value="planting">식물 키우기</option>
                            <option value="art-viewing">예술 관람</option>
                            <option value="art">미술</option>
                            <option value="reading">독서</option>
                        </Selecter>
                    </SelectContainer>

                    <Input
                        type="number"
                        label="현재 취미에 대한 관심도는 몇인가요?"
                        max={10}
                        min={0}
                        placeholder="0부터 10까지 입력해주세요"
                    />
                    <Input
                        type="number"
                        label="원하시는 취미 수준은 몇인가요?"
                        max={10}
                        min={0}
                        placeholder="0부터 10까지 입력해주세요"
                    />
                </InputWrapper>

                <SubmitButton onClick={toMain}>제출하기</SubmitButton>
            </Form>
        </Background>
    )
}

export default FormPage

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(white, ${Colors.Blue50});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

const LogoWrapper = styled.div`
    width: 100px;
    padding: 10px;
    border-bottom: 1px solid ${Colors.Blue500};
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Title = styled.p`
    color: ${Colors.Blue800};
    font-size: 30px;
    font-weight: 400;
`

const SubTitle = styled.p`
    color: ${Colors.Blue600};
    font-size: 20px;
`

const Form = styled.form`
    width: 450px;
    padding: 20px;
    border: 1px solid ${Colors.Blue800};
    border-radius: 15px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
`

const SubmitButton = styled.div`
    width: 350px;
    height: 35px;
    border-radius: 10px;
    border: none;
    background-color: ${Colors.Blue500};
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:active {
        background: ${Colors.Blue600};
        transition: 200ms;
    }
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 0;
`

const Label = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: black;
    padding: 0 5px;
`

const Selecter = styled.select`
    background: ${Colors.Gray50};
    border: 1px solid ${Colors.Gray300};
    border-radius: 10px;
    height: 40px;
    width: 350px;
    font-size: 15px;
    outline: none;
    padding: 5px;
    margin: 0;
    color: ${Colors.Gray600};

    &::placeholder {
        color: ${Colors.Gray200};
        padding: 0;
        margin: 0;
    }

    &:focus {
        border: 1px solid ${Colors.Blue400};
    }
`

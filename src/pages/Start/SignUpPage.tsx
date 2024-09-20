import styled from "styled-components"
import { Colors } from "../../styles/colors"
import Logo from "../../assets/Logo.png"
import Input from "../../components/common/Input"
import { useNavigate } from "react-router-dom"

function SignUpPage() {
    const navigate = useNavigate()

    const toLoginHandler = () => {
        navigate("/login")
    }

    const toForm = () => {
        navigate("/form")
    }

    return (
        <>
            <Background>
                <LogoWrapper>
                    <img src={Logo} width={100} />
                </LogoWrapper>

                <TitleWrapper>
                    <Title>회원가입</Title>
                    <SubTitle>회원가입하여 MSG 서비스를 이용하세요</SubTitle>
                </TitleWrapper>

                <Form onSubmit={toForm}>
                    <InputWrapper>
                        <Input
                            type="text"
                            label="아이디"
                            placeholder="아이디를 입력하세요"
                            min={4}
                            max={12}
                        />

                        <Input
                            type="password"
                            label="비밀번호"
                            placeholder="비밀번호를 입력하세요"
                            min={4}
                            max={12}
                        />
                        <Input
                            type="password"
                            label="비밀번호 확인"
                            placeholder="비밀번호를 다시 입력하세요"
                            min={4}
                            max={12}
                        />
                    </InputWrapper>
                    <SubmitButton onClick={toForm}>회원가입</SubmitButton>

                    <Ask>
                        회원이신가요?{" "}
                        <Accent onClick={toLoginHandler}>로그인</Accent>
                    </Ask>
                </Form>
            </Background>
        </>
    )
}

export default SignUpPage

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

const Ask = styled.p`
    color: ${Colors.Gray500};
    font-size: 16px;
    font-weight: lighter;
`

const Accent = styled.span`
    color: ${Colors.Blue400};
    font-size: 16px;
    font-weight: lighter;
    cursor: pointer;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

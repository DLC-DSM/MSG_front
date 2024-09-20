import styled from "styled-components"
import { Colors } from "../../styles/colors"
import Logo from "../../assets/Logo.png"
import { AiOutlineBell } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    const toMainHandler = () => {
        navigate("/main")
    }

    const toMissionPage = () => {
        navigate("/mission")
    }

    const toInform = () => {
        navigate("/inform")
    }

    const toClub = () => {
        navigate("/club")
    }

    const toShop = () => {
        navigate("/shop")
    }

    return (
        <>
            <Background>
                <Container>
                    <LeftContainer>
                        <PageButton onClick={toMainHandler}>
                            <img src={Logo} width={80} />
                        </PageButton>

                        <ButtonContainer>
                            <PageButton onClick={toMissionPage}>
                                도전과제
                            </PageButton>
                            <PageButton onClick={toInform}>정보제공</PageButton>
                            <PageButton onClick={toClub}>동호회</PageButton>
                            <PageButton onClick={toShop}>상점</PageButton>
                        </ButtonContainer>
                    </LeftContainer>
                    <RightContainer>
                        <IconButton>
                            <AiOutlineBell />
                        </IconButton>
                        <IconButton>
                            <BsFillPersonFill />
                        </IconButton>
                    </RightContainer>
                </Container>
            </Background>
        </>
    )
}

export default Header

const Background = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-bottom: 1px solid ${Colors.Gray100};
    margin-bottom: 5px;
`

const Container = styled.div`
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    gap: 15px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 15px;
`

const PageButton = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
    color: black;
    font-size: 16px;
`

const IconButton = styled.div`
    background: white;
    border: none;
    cursor: pointer;
    font-size: 25px;
    color: ${Colors.Blue800};
`

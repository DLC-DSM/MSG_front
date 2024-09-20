import styled from "styled-components"
import { Colors } from "../../styles/colors"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Video from "../../components/Inform/Video"
import News from "../../components/Inform/News"
import { useNavigate } from "react-router-dom"

function InformPage() {
    const navigate = useNavigate()

    const toVideoHandler = () => {
        navigate("/video")
    }

    const toNewsHandler = () => {
        navigate("/news")
    }

    return (
        <>
            <Background>
                <Header />

                <Container>
                    <VideoContainer>
                        <ButtonContainer>
                            <Title>동영상</Title>
                            <AllButton onClick={toVideoHandler}>
                                전체보기
                            </AllButton>
                        </ButtonContainer>
                        <VideoWrapper>
                            <Video
                                title="평범한 사람이 정기적으로 러닝을 했더니 나타난 놀라운 변화 | 러닝과 학습능력, 러너스하 원리, 러닝 크루"
                                viewCount={1350000}
                            />
                            <Video
                                title="평범한 사람이 정기적으로 러닝을 했더니 나타난 놀라운 변화 | 러닝과 학습능력, 러너스하 원리, 러닝 크루"
                                viewCount={1350000}
                            />
                            <Video
                                title="평범한 사람이 정기적으로 러닝을 했더니 나타난 놀라운 변화 | 러닝과 학습능력, 러너스하 원리, 러닝 크루"
                                viewCount={1350000}
                            />
                        </VideoWrapper>
                    </VideoContainer>

                    <NewsContainer>
                        <ButtonContainer>
                            <Title>뉴스</Title>
                            <AllButton onClick={toNewsHandler}>
                                전체보기
                            </AllButton>
                        </ButtonContainer>
                        <News
                            enter="연합뉴스"
                            title="목요일 저녁, 야식 대신 뛰어볼까…'7979 서울 러닝크루'"
                            explain="러닝크루는 참여한 시민이 러닝을 종료한 뒤에 공식 구호 '7979'를 외치면 1인당 7천979원이 적립되는 '같이 달리는 가치 있는 달리기' 형식이다."
                        />
                        <News
                            enter="연합뉴스"
                            title="목요일 저녁, 야식 대신 뛰어볼까…'7979 서울 러닝크루'"
                            explain="러닝크루는 참여한 시민이 러닝을 종료한 뒤에 공식 구호 '7979'를 외치면 1인당 7천979원이 적립되는 '같이 달리는 가치 있는 달리기' 형식이다."
                        />
                        <News
                            enter="연합뉴스"
                            title="목요일 저녁, 야식 대신 뛰어볼까…'7979 서울 러닝크루'"
                            explain="러닝크루는 참여한 시민이 러닝을 종료한 뒤에 공식 구호 '7979'를 외치면 1인당 7천979원이 적립되는 '같이 달리는 가치 있는 달리기' 형식이다."
                        />
                        <News
                            enter="연합뉴스"
                            title="목요일 저녁, 야식 대신 뛰어볼까…'7979 서울 러닝크루'"
                            explain="러닝크루는 참여한 시민이 러닝을 종료한 뒤에 공식 구호 '7979'를 외치면 1인당 7천979원이 적립되는 '같이 달리는 가치 있는 달리기' 형식이다."
                        />
                    </NewsContainer>
                </Container>
            </Background>
            <Footer />
        </>
    )
}

export default InformPage

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Container = styled.div`
    width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const VideoContainer = styled.div`
    width: 800px;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${Colors.Gray400};
`

const ButtonContainer = styled.div`
    width: 760px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
`

const AllButton = styled.p`
    margin-left: auto;
    color: black;
    border: none;
    background: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`

const VideoWrapper = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const NewsContainer = styled.div`
    width: 800px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

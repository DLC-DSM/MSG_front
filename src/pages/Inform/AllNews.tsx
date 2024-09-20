import styled from "styled-components"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import News from "../../components/Inform/News"
import Before from "../../components/Before"

function AllNews() {
    return (
        <>
            <Background>
                <Header />
                <Wrapper>
                    <Before />
                </Wrapper>

                <NewsContainer>
                    <Title>뉴스</Title>
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
                    <News
                        enter="연합뉴스"
                        title="목요일 저녁, 야식 대신 뛰어볼까…'7979 서울 러닝크루'"
                        explain="러닝크루는 참여한 시민이 러닝을 종료한 뒤에 공식 구호 '7979'를 외치면 1인당 7천979원이 적립되는 '같이 달리는 가치 있는 달리기' 형식이다."
                    />
                </NewsContainer>
            </Background>
            <Footer />
        </>
    )
}

export default AllNews

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const Wrapper = styled.div`
    width: 750px;
`

const Title = styled.p`
    width: 750px;
    font-size: 20px;
    font-weight: bold;
`

const NewsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 10px;
`

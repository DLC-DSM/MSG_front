import styled from "styled-components"
import Header from "../../components/common//header"
import Footer from "../../components/common/footer"
import Video from "../../components/Inform/Video"
import Before from "../../components/Before"

function AllVideo() {
    return (
        <>
            <Background>
                <Header />

                <Wrapper>
                    <Before />
                </Wrapper>
                <VideoContainer>
                    <Title>동영상</Title>
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
            </Background>
            <Footer />
        </>
    )
}

export default AllVideo

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const Wrapper = styled.div`
    width: 730px;
`

const Title = styled.p`
    width: 730px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 10px;
`

const VideoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

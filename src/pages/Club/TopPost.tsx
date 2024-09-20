import styled from "styled-components"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Post from "../../components/club/Post"
import PostContainer from "../../components/club/PostContainer"
import Before from "../../components/Before"

function TopPost() {
    return (
        <>
            <Background>
                <Header />

                <Wrapper>
                    <Before />
                </Wrapper>
                <PostContainer title="인기 게시물" showButton={false}>
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="아 일하기 싫다"
                        user="서모시깽이"
                        date="2024.8.5"
                    />
                </PostContainer>

                <Footer />
            </Background>
        </>
    )
}

export default TopPost

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

const Wrapper = styled.div`
    width: 700px;
`

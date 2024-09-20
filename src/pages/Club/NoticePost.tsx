import styled from "styled-components"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Post from "../../components/club/Post"
import PostContainer from "../../components/club/PostContainer"
import Before from "../../components/Before"

function NoticePost() {
    return (
        <>
            <Background>
                <Header />

                <Wrapper>
                    <Before />
                </Wrapper>
                <PostContainer title="공지사항" showButton={false}>
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                    <Post
                        title="2024년 9월 5일 업데이트 사안입니다"
                        user="김모시깽이"
                        date="2024.8.5"
                    />
                </PostContainer>

                <Footer />
            </Background>
        </>
    )
}

export default NoticePost

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

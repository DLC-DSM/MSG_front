import styled from "styled-components"
import { Colors } from "../../styles/colors"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import { FaBell } from "react-icons/fa6"
import { IoIosArrowForward } from "react-icons/io"
import Post from "../../components/club/Post"
import PostContainer from "../../components/club/PostContainer"
import { useNavigate } from "react-router-dom"

function ClubPage() {
    const navigate = useNavigate()

    const toAllNoticePostHandler = () => {
        navigate("/notice")
    }

    const toAllTopPostHandler = () => {
        navigate("/top")
    }

    const toAllPostsHandler = () => {
        navigate("/posts")
    }

    return (
        <>
            <Background>
                <Header />

                <Notice onClick={toAllNoticePostHandler}>
                    <NoticeWrapper>
                        <NoticeIcon>
                            <FaBell />
                        </NoticeIcon>
                        <NoticeText>새로운 공지사항이 생겼습니다!</NoticeText>
                    </NoticeWrapper>
                    <ToNoticeWrapper>
                        <ToNoticeText>공지사항 바로가기</ToNoticeText>
                        <ToNoticeIcon>
                            <IoIosArrowForward />
                        </ToNoticeIcon>
                    </ToNoticeWrapper>
                </Notice>

                <PostContainerWrapper>
                    <PostContainer
                        title="공지사항"
                        toAll={toAllNoticePostHandler}
                    >
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

                    <PostContainer
                        title="인기게시물"
                        toAll={toAllTopPostHandler}
                    >
                        <Post
                            title="아 일 극혐"
                            user="서모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 극혐"
                            user="서모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 극혐"
                            user="서모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 극혐"
                            user="서모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 극혐"
                            user="서모시깽이"
                            date="2024.8.5"
                        />
                    </PostContainer>
                    <PostContainer title="최근게시물" toAll={toAllPostsHandler}>
                        <Post
                            title="아 일 하기 싫다"
                            user="김모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 하기 싫다"
                            user="김모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 하기 싫다"
                            user="김모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 하기 싫다"
                            user="김모시깽이"
                            date="2024.8.5"
                        />
                        <Post
                            title="아 일 하기 싫다"
                            user="김모시깽이"
                            date="2024.8.5"
                        />
                    </PostContainer>
                </PostContainerWrapper>
            </Background>
            <Footer />
        </>
    )
}

export default ClubPage

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Notice = styled.div`
    width: 800px;
    height: 40px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Colors.Blue50};
    cursor: pointer;
    margin: 20px;
`

const NoticeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
`

const NoticeIcon = styled.p`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 16px;
    color: white;
    background: ${Colors.Blue800};
    display: flex;
    justify-content: center;
    align-items: center;
`

const NoticeText = styled.p`
    font-size: 16px;
    color: ${Colors.Blue800};
`

const ToNoticeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-left: auto;
    margin-right: 10px;
`

const ToNoticeText = styled.p`
    color: ${Colors.Blue500};
    font-size: 15px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const ToNoticeIcon = styled.p`
    font-size: 12px;
    margin-top: 1px;
    color: ${Colors.Blue500};
    cursor: pointer;
`

const PostContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
`

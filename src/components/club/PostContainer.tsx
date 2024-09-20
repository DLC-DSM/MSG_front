import styled from "styled-components"
import { Colors } from "../../styles/colors"
import { IoIosArrowForward } from "react-icons/io"
import { ReactNode } from "react"

interface props {
    title?: string
    toAll?: () => void
    children?: ReactNode
    showButton?: boolean
}

function PostContainer({ title, toAll, children, showButton = true }: props) {
    return (
        <>
            <Container>
                <PostsTitleContainer>
                    <PostsTitle>{title}</PostsTitle>

                    {showButton && (
                        <ButtonWrapper onClick={toAll}>
                            <ToAllButton>전체보기</ToAllButton>
                            <ButtonIcon>
                                <IoIosArrowForward />
                            </ButtonIcon>
                        </ButtonWrapper>
                    )}
                </PostsTitleContainer>
                {children}
            </Container>
        </>
    )
}

export default PostContainer

const Container = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const PostsTitleContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${Colors.Gray200};
`

const PostsTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-left: 10px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
`

const ToAllButton = styled.p`
    font-size: 16px;
    color: ${Colors.Gray500};
`

const ButtonIcon = styled.button`
    margin-top: 2px;
    border: none;
    background: none;
    color: ${Colors.Gray500};
    font-size: 14px;
    cursor: pointer;
`

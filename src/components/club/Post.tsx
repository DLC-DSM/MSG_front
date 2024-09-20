import styled from "styled-components"
import { Colors } from "../../styles/colors"

interface Props {
    title?: string
    user?: string
    date?: string
}

function Post({ title, user, date }: Props) {
    return (
        <>
            <Background>
                <PostWrapper>
                    <PostTitle>{title}</PostTitle>
                    <PostUser>{user}</PostUser>
                </PostWrapper>
                <Date>{date}</Date>
            </Background>
        </>
    )
}

export default Post

const Background = styled.div`
    width: 700px;
    height: 60px;
    border-bottom: 1px solid ${Colors.Gray100};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
`

const PostWrapper = styled.div`
    width: 600px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 10px;
`
const PostTitle = styled.p`
    width: 600px;
    font-size: 18px;
    color: black;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`

const PostUser = styled.p`
    width: 600px;
    height: 20px;
    font-size: 16px;
    color: ${Colors.Gray500};
    font-weight: lighter;
`

const Date = styled.p`
    font-size: 16px;
    color: ${Colors.Gray500};
    margin-left: auto;
    margin-right: 10px;
`

import styled from "styled-components"
import { Colors } from "../../styles/colors"
import { useState } from "react"
import ImageUpload from "../common/ImageUpload"

type Props = {
    title?: string
    closeModal?: () => void
}

function Modal({ title, closeModal }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <>
            <ModalContainer>
                <ModalBackground>
                    <ModalWrapper>
                        <MissionTitleContainer>
                            <MissionTitle>{title}</MissionTitle>
                        </MissionTitleContainer>

                        <Form>
                            <Container>
                                <Wrapper>
                                    <InputContainer>
                                        <InputTitleContainer>
                                            <InputTitle>인증하기</InputTitle>
                                            <InputSubTitle>
                                                미션을 인증할 내용을
                                                입력해주세요.
                                            </InputSubTitle>
                                            <Input placeholder="인증할 내용을 입력해주세요" />
                                        </InputTitleContainer>
                                    </InputContainer>
                                </Wrapper>

                                <Wrapper>
                                    <ImageContainer>
                                        <InputImage
                                            type="file"
                                            id="image-upload"
                                            accept="iamge/*"
                                            onChange={handleImageChange}
                                        />
                                        <InputImageStyle htmlFor="image-upload">
                                            <p>사진 업로드하기</p>
                                        </InputImageStyle>

                                        <ImageUpload />

                                        {selectedImage && (
                                            <img
                                                src={selectedImage}
                                                alt="미리보기"
                                                width={300}
                                            />
                                        )}
                                    </ImageContainer>
                                </Wrapper>
                            </Container>

                            <SubmitButton onClick={closeModal}>
                                제출하기
                            </SubmitButton>
                        </Form>
                    </ModalWrapper>
                </ModalBackground>
            </ModalContainer>
        </>
    )
}

export default Modal

const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
`

const ModalBackground = styled.div`
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100vh;
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    background: white;
    border: 1px solid ${Colors.Blue500};
    border-radius: 30px;
    padding: 5px;

    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
`

const Form = styled.form`
    width: 800px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const Container = styled.div`
    height: 400px;
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 20px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const MissionTitleContainer = styled.div`
    width: 500px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: white;
    border: 1px solid ${Colors.Blue500};
    border-radius: 15px;
`

const MissionTitle = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Blue500};
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InputTitleContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: start;
    flex-direction: column;
    gap: 4px;
`

const InputTitle = styled.p`
    font-size: 16px;
    padding-left: 10px;
`

const InputSubTitle = styled.p`
    font-size: 16px;
    font-weight: lighter;
    padding-left: 10px;
`

const Input = styled.textarea`
    width: 350px;
    height: 200px;
    background: white;
    border: 1px solid ${Colors.Gray500};
    border-radius: 15px;
    padding: 10px;
    outline: none;
    resize: none;

    &:focus {
        border: 1px solid ${Colors.Blue500};
    }

    &::placeholder {
        color: ${Colors.Gray300};
        font-size: 16px;
    }
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const InputImage = styled.input`
    display: none;
`

const InputImageStyle = styled.label`
    width: 300px;
    height: 40px;
    border: 1px solid ${Colors.Blue500};
    border-radius: 15px;
    background: ${Colors.Blue50};
    cursor: pointer;
    margin: 20px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Blue800};

    &:active {
        background-color: ${Colors.Blue100};
        transition: 200ms;
    }
`

const SubmitButton = styled.button`
    width: 300px;
    height: 40px;
    background: ${Colors.Blue500};
    border: none;
    border-radius: 15px;
    cursor: pointer;
    color: white;
`

import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { Colors } from "../../styles/colors"

function ImageUpload() {
    const [imgFile, setImgFile] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>()

    const onChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null) {
            const file = event.target.files[0]

            if (file && file.type.substring(0, 5) === "image") {
                setImgFile(file)
            } else {
                setImgFile(null)
            }
        }
    }

    useEffect(() => {
        if (imgFile) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(imgFile)
        } else {
            setPreview(null)
        }
    }, [imgFile])

    return (
        <>
            {!imgFile && (
                <Container>
                    <Input
                        name="img"
                        type="file"
                        accept="image/*"
                        onChange={onChangeImg}
                        className="hidden"
                        id="img-upload"
                    />

                    <InputImgae htmlFor="img-upload">
                        사진 업로드 하기
                    </InputImgae>
                </Container>
            )}
            {imgFile && <img src={preview as string} />}
        </>
    )
}

export default ImageUpload

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Input = styled.input`
    display: none;
`

const InputImgae = styled.label`
    width: 300px;
    height: 30px;
    border: 1px solid ${Colors.Blue500};
    border-radius: 7px;
    background: white;
    cursor: pointer;
    margin: 20px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Blue800};

    &:active {
        background-color: ${Colors.Gray50};
        transition: 200ms;
    }
`

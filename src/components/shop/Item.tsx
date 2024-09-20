import styled from "styled-components"
import { Colors } from "../../styles/colors"

interface Props {
    itemName?: string
    price: number
    salePercent?: number
}

function Item({ itemName, price, salePercent }: Props) {
    const salePrice = salePercent
        ? Math.ceil(price * ((100 - salePercent) / 100)).toLocaleString()
        : undefined

    const notSalePrice = price.toLocaleString()

    return (
        <>
            <Container>
                <ItemImg />
                <ItemName id="name">{itemName}</ItemName>

                {salePercent && (
                    <>
                        <PriceContainer>
                            <SalePercent>{salePercent}%</SalePercent>
                            <SalePrice>{salePrice}원</SalePrice>
                        </PriceContainer>
                        <OriginPrice>{notSalePrice}원</OriginPrice>
                    </>
                )}

                {!salePercent && (
                    <>
                        <Price>{notSalePrice}원</Price>
                    </>
                )}
            </Container>
        </>
    )
}

export default Item

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    &:hover #name {
        text-decoration: underline;
    }
`

const ItemImg = styled.div`
    width: 150px;
    height: 150px;
    background: ${Colors.Gray100};
    border-radius: 15px;
`

const ItemName = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: black;
    width: 140px;
`

const PriceContainer = styled.div`
    width: 150px;
    height: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5px;
    margin-left: 10px;
`

const SalePercent = styled.p`
    font-size: 16px;
    color: ${Colors.CriticalMain};
`

const SalePrice = styled.p`
    font-size: 16px;
    color: black;
`

const OriginPrice = styled.p`
    width: 150px;
    margin-left: 10px;
    font-size: 16px;
    color: ${Colors.Gray200};
    text-decoration: line-through;
`

const Price = styled.p`
    margin-left: 10px;
    font-size: 16px;
    color: black;
    width: 150px;
`

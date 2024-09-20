import styled from "styled-components"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Item from "../../components/shop/Item"
import ItemContainer from "../../components/shop/ItemContainer"
import { useNavigate } from "react-router-dom"

function ShopPage() {
    const navigate = useNavigate()

    const toSaleItemsHandler = () => {
        navigate("/sale")
    }

    const toItemsHandler = () => {
        navigate("/items")
    }

    return (
        <>
            <Background>
                <Header />
                <ItemContainer
                    name="24시간 특가"
                    subName="24시간동안만 만날 수 있는 특별한 소금!"
                    toAll={toSaleItemsHandler}
                >
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        salePercent={10}
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        salePercent={10}
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        salePercent={10}
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        salePercent={10}
                        price={25000}
                    />
                </ItemContainer>
                <ItemContainer
                    name="회원님을 위한 추천 상품"
                    toAll={toItemsHandler}
                >
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                </ItemContainer>
                <ItemContainer>
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                </ItemContainer>
                <ItemContainer>
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                    <Item
                        itemName="Do it! 타입스크립트 프로그래밍"
                        price={25000}
                    />
                </ItemContainer>
                <Footer />
            </Background>
        </>
    )
}

export default ShopPage

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: cetner;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

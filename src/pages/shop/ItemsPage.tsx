import styled from "styled-components"
import Header from "../../components/common/header"
import Footer from "../../components/common/footer"
import Before from "../../components/Before"
import Item from "../../components/shop/Item"
import ItemContainer from "../../components/shop/ItemContainer"

function ItemsPage() {
    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <Before />
                </Wrapper>

                <ItemContainer name="회원님을 위한 추천 상품">
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
                <ItemContainer>
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
                <ItemContainer>
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
            </Container>
            <Footer />
        </>
    )
}

export default ItemsPage

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
`

const Wrapper = styled.div`
    width: 750px;
    margin-top: 20px;
`

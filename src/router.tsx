import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollTop from "./pages/ScorllTop"
import StartPage from "./pages/Start/StartPage"
import LoginPage from "./pages/Start/LoginPage"
import SignUpPage from "./pages/Start/SignUpPage"
import FormPage from "./pages/Start/FormPage"
import MainPage from "./pages/MainPage"
import MissionPage from "./pages/MissionPage"
import InformPage from "./pages/Inform/InformPage"
import AllVideo from "./pages/Inform/AllVideo"
import AllNews from "./pages/Inform/AllNews"
import ClubPage from "./pages/Club/ClubPage"
import NoticePost from "./pages/Club/NoticePost"
import TopPost from "./pages/Club/TopPost"
import AllPosts from "./pages/Club/AllPosts"
import ShopPage from "./pages/shop/ShopPage"
import SaleItemsPage from "./pages/shop/SaleItemsPage"
import ItemsPage from "./pages/shop/ItemsPage"

function Router() {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/mission" element={<MissionPage />} />
                <Route path="/inform" element={<InformPage />} />
                <Route path="/video" element={<AllVideo />} />
                <Route path="/news" element={<AllNews />} />
                <Route path="/club" element={<ClubPage />} />
                <Route path="/notice" element={<NoticePost />} />
                <Route path="/top" element={<TopPost />} />
                <Route path="/posts" element={<AllPosts />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/sale" element={<SaleItemsPage />} />
                <Route path="/items" element={<ItemsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

import {Outlet} from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import BackgroundVideo from "./BackgroundVideo.jsx";
import TourBanner from "./TourBanner.jsx";
import StandUpList from "./StandUpList.jsx";
import VideoSection from "./VideoSection.jsx";

function Layout() {
    return (
            <main className="wrapper relative overflow-hidden bg-[#111111] rounded-3xl px-11">
                <Header/>
                <VideoSection/>
                <Outlet/>
                <Main/>
                <TourBanner/>
                <StandUpList/>
                <Footer/>
            </main>
    )
}

export default Layout;
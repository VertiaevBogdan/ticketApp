import VideoSection from "../components/main/VideoSection.jsx";
import Main from "../components/main/Main.jsx";
import TourBanner from "../components/main/TourBanner.jsx";
import StandUpList from "../components/main/StandUpList.jsx";

export default function HomePage() {
    return (
        <>
            <VideoSection/>
            <Main/>
            <TourBanner/>
            <StandUpList/>
        </>
    );
}

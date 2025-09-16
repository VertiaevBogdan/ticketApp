import StandUpList from "../components/main/StandUpList.jsx";
import StandupDescription from "../components/standups/StandupDescription.jsx";
import StandupPreview from "../components/standups/StandupPreview.jsx";

export default function StandupPage(){
    return (
        <>
            <StandupPreview/>
            <StandupDescription/>
            <StandUpList/>
        </>
    );
}


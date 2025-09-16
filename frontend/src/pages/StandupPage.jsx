import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api.js"
import StandUpList from "../components/main/StandUpList.jsx";
import StandupDescription from "../components/standups/StandupDescription.jsx";
import StandupPreview from "../components/standups/StandupPreview.jsx";


export default function StandupPage(){

    const {slug} = useParams();
    const [standup, setStandup] = useState([]);

    useEffect(() => {
        api.get(`standup/${slug}/`)
            .then(res => setStandup(res.data))
            .catch(err => console.error(err))
    }, [slug]);

    return (
        <>
            <StandupPreview standup={standup}/>
            <StandupDescription standup={standup}/>
            <StandUpList/>
        </>
    );
}


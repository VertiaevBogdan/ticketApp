import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StandUpList from "../components/main/StandUpList.jsx";
import StandupDescription from "../components/standups/StandupDescription.jsx";
import StandupPreview from "../components/standups/StandupPreview.jsx";
import {getStandup} from "../api/standup.js";


export default function StandupPage(){

    const {slug} = useParams();
    const [standup, setStandup] = useState([]);

    useEffect(() => {
        getStandup(slug)
            .then(res => setStandup(res.data))
            .catch(err => console.error(err));
    }, [slug]);

    return (
        <>
            <StandupPreview key={slug} standup={standup}/>
            <StandupDescription standup={standup}/>
            <StandUpList/>
        </>
    );
}


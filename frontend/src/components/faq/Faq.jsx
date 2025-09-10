import api from "../../api/api.js";
import {useState, useEffect} from "react";
import FaqItem from "./FaqItem.jsx";

export default function Faq() {

    const [data, setData] = useState([])

    useEffect(() => {
        api.get('faq/')
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <main className="flex justify-center">
            <FaqItem items={data}/>
        </main>
    );
}
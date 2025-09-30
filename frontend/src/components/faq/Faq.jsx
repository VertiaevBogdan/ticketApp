import {getFaq} from "../../api/faq.js";
import {useState, useEffect} from "react";
import FaqItem from "./FaqItem.jsx";

export default function Faq() {

    const [data, setData] = useState([])

    useEffect(() => {
        getFaq()
            .then(res => setData(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <main className="flex justify-center">
            <FaqItem items={data}/>
        </main>
    );
}
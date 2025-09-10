import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/main/Layout.jsx";
import Tour from "./components/tour/Tour.jsx";
import Faq from "./components/faq/Faq.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/tour" element={<Tour/>}/>
            <Route path="/faq" element={<Faq/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

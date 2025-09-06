import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/main/Layout.jsx";
import Tour from "./components/tour/Tour.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}></Route>
            <Route path="/tour" element={<Tour/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/main/Layout.jsx";
import Main from "./components/main/Main.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}> /* contains header*/
                <Route index element={<Main/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

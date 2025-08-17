import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/main/Layout.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}> /* contains header*/
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

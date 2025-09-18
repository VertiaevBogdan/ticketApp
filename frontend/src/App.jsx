import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/main/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import TourPage from "./pages/TourPage.jsx";
import StandupPage from "./pages/StandupPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";



function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path="/standup/:slug" element={<StandupPage />}/>
                <Route path="/faq" element={<FaqPage />}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
            <Route path="/tour" element={<TourPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

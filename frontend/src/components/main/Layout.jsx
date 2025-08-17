import {Outlet} from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout() {
    return (
        <>
            <main className="wrapper">
                <Header/>
                <Outlet />
                <Footer/>
            </main>
        </>
    )
}

export default Layout;
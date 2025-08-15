import {Outlet} from "react-router";
import Header from "./Header.jsx";

function Layout() {
    return (
        <>
            <Header/>
            <main className="wrapper">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;
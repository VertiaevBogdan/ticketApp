import {Link} from "react-router";

function Header(){
    return (
        <header className="border-gray-200 py-2.5 mt-2 z-50 relative">
            <nav className="wrapper h-10 flex justify-between items-center">
                <img src="../../../public/img/logo.png" alt="logo"
                          className="w-[3.5em]"/>
                <ul className="inline-flex items-center text-white/40 space-x-11">
                    <li>
                        <Link to="/tour" className="relative cursor-pointer"
                        >ТУР</Link>
                    </li>
                    <li>
                        <Link to="/todolist" className="relative cursor-pointer"
                        >поддержать</Link>
                    </li>
                    <li>
                        <Link to="/lesson3" className="relative cursor-pointer"
                        >вещдок</Link>
                    </li>
                    <li>
                        <Link to="/lesson3" className="relative cursor-pointer"
                        >стендапы</Link>
                    </li>
                    <li>
                        <Link to="/lesson3" className="relative cursor-pointer"
                        >faq</Link>
                    </li>
                    <li>
                        <button className="relative bg-[#111111] px-5 py-1.5 rounded-lg
                        text-white cursor-pointer font-bold items-center hover:bg-[#171717] duration-100"
                        >вход</button>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;
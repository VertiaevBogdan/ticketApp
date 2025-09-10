import {Link} from "react-router";
import {HashLink} from "react-router-hash-link";

function Header(){
    return (
        <header className="border-gray-200 py-2.5 mt-2 z-50 relative">
            <nav className="wrapper h-10 flex justify-between items-center">
                <Link to="/">
                    <img src="../../../public/img/logo.png" alt="logo"
                          className="w-[3.5em]"/>
                </Link>
                <ul className="inline-flex items-center text-white/40 space-x-11">
                    <li>
                        <Link to="/tour" className="relative cursor-pointer
                         hover:text-white transition duration-150"
                        >ТУР</Link>
                    </li>
                    <li>
                        <Link to="/todolist" className="relative cursor-pointer
                                hover:text-white transition duration-150"
                        >поддержать</Link>
                    </li>
                    <li>
                        <Link to="/lesson3" className="relative cursor-pointer
                                hover:text-white transition duration-150"
                        >вещдок</Link>
                    </li>
                    <li>
                        <HashLink smooth to="#standups" className="relative cursor-pointer
                                hover:text-white transition duration-150"
                        >стендапы</HashLink>
                    </li>
                    <li>
                        <Link to="/faq" className="relative cursor-pointer
                                hover:text-white transition duration-150"
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
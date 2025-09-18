import {Link} from "react-router";

export default function RegisterPage() {
    return(
        <section className="flex justify-center p-[68px] my-[2.5em]">
            <form className="border border-solid border-[#801219] flex flex-col
                            items-center justify-center text-white max-w-[320px]
                            p-[26px] rounded-3xl">
                <h1 className="font-bold text-[1.8rem] mb-[30px] text-center">регистрация</h1>
                <input type="text" placeholder="имя"
                       className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input type="email" placeholder="email"
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input type="password" placeholder="пароль"
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input type="password" placeholder="повторить пароль"
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <Link to="/register">
                    <button className="flex items-center mb-5 bg-[#801219] p-3 cursor-pointer
                                    rounded-lg h-9 w-[258px] justify-center mt-4 text-[17px]
                                    hover:bg-[#951b22] transition duration-200">
                    зарегестрироваться
                </button>
                </Link>
                <button className="text-white/40 text-[16px] border-b border-white/40
                                    cursor-pointer hover:text-white hover:border-white
                                     transition duration-200">
                    вход
                </button>
            </form>
        </section>
    )
}
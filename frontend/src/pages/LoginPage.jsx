import {Link} from "react-router";
import {useState} from "react";


export default function LoginPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
         <section className="flex justify-center my-[5em] p-[68px]">
            <form onSubmit={handleSubmit} className="border border-solid border-[#801219] flex flex-col
                            items-center justify-center text-white max-w-[320px]
                            p-[26px] rounded-3xl">
                <h1 className="font-bold text-[1.8rem] mb-[30px] text-center">вход</h1>
                <input type="email" value={email} placeholder="email"
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input type="password" value={password} placeholder="пароль"
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <button className="flex items-center mb-5 bg-[#801219] p-3 cursor-pointer
                                    rounded-lg h-9 w-[258px] justify-center mt-4 text-[17px]
                                    hover:bg-[#951b22] transition duration-200">
                    войти
                </button>
                <button className="text-white/40 text-[16px] border-b border-white/40
                                    cursor-pointer hover:text-white hover:border-white
                                     transition duration-200">
                    я не помню пароль
                </button>
                <Link to="/register">
                    <button className="text-white/40 text-[16px] border-b border-white/40
                                    cursor-pointer hover:text-white hover:border-white
                                     transition duration-200">
                    регистрация
                </button>
                </Link>
            </form>
        </section>
    );
}
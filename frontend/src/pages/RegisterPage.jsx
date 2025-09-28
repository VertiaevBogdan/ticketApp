import api from "../api/api.js";
import {Link} from "react-router";
import {useState} from "react";

export default function RegisterPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState("");

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === "confirmPassword" && value !== formData.password){
            setError("пароли не совпадают")
        } else if ( name === "confirmPassword" && value === formData.password) {
            setError("");
        }
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("пароли не совпадают");
            return;
        }

        try {
            await api.post("/users/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            });
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <section className="flex justify-center p-[68px] my-[2.5em]">
            <form onSubmit={handleSubmit} className="border border-solid border-[#801219] flex flex-col
                            items-center justify-center text-white max-w-[320px]
                            p-[26px] rounded-3xl">
                <h1 className="font-bold text-[1.8rem] mb-[30px] text-center">регистрация</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="имя"
                    value={formData.name}
                    onChange={handleChange}
                       className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input
                    type="password"
                    name="password"
                    placeholder="пароль"
                    value={formData.password}
                    onChange={handleChange}
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="повторить пароль"
                    className="text-center border-b border-solid border-white/40
                                 outline-none p-3"/>
                {error && <p className="text-[#801219] text-[16px] mt-3">{error}</p>}
                <Link to="/register">
                    <button
                        type="submit"
                        className="flex items-center mb-5 bg-[#801219] p-3 cursor-pointer
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
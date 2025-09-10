import {useState} from "react";

export default function FaqItem(){

    const [open, setOpen] = useState(false);

    return(
        <div className="flex flex-col items-start">
                <h1 className="text-[3.5em] text-[#801219] font-black mb-10">FAQ</h1>
                <article className="text-white border-b-[1px] border-b-[#801219] border-solid
                                    max-w-[45.5em]">
                    <button
                        onclick={() => setOpen(!open)}
                        className="cursor-pointer flex justify-between items-center w-[45.5em]">
                        <p className="font-bold py-5"> testovy text</p>
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-6 h-6 transition-transform duration-300 ${
                            open ? "rotate-45 text-red-500" : "rotate-0 text-white"
                          }`}
                        >
                          <path
                            d="M7 1L7 13M13 7L1 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>

                    </button>
                    <div className={`overflow-hidden transition-[max-height] duration-300
                                    ease-in-out ${open ? "max-h-40" : "max-h-0"}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Adipisci animi aspernatur, aut consectetur doloremque dolores enim facere fuga,
                        in ipsam itaque libero magnam omnis provident quas quis reiciendis rerum sapiente!
                    </div>
                </article>
            </div>

    );
}
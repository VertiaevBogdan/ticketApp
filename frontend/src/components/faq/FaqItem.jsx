import {useState} from "react";

export default function FaqItem({items}){

    const [openId, setOpenId] = useState(null) //open block id

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    }

    return(
        <div className="flex flex-col items-start">
                <h1 className="text-[3.5em] text-[#801219] font-black mb-10">FAQ</h1>
                {items.map((item) => (
                        <article key={item.id} className="text-white border-b-[1px] border-b-[#801219] border-solid
                                    max-w-[45.5em]">
                            <button
                                onClick={() => toggle(item.id)}
                                className="cursor-pointer flex justify-between items-center w-[45.5em]">
                                <p className="font-bold py-5"> {item.title}</p>
                                <svg
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`w-3 transition-transform duration-200 ${
                                    openId === item.id ? "rotate-45 text-red-500" : "rotate-0 text-white"
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
                            <div className={`overflow-hidden transition-[max-height] ease-in-out duration-700
                                             ${openId === item.id ? "max-h-40" : "max-h-0"}`}>
                                <p className="pb-6">
                                    {item.body}
                                </p>
                            </div>
                        </article>
                    ))}
            </div>

    );
}
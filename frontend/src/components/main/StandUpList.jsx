import { useEffect, useState } from "react";
import api from '../../api/api.js'
import StandUpCard from "./StandUpCard.jsx";

function StandUpList() {

    const [standups, setStandups] = useState([]);

    useEffect(() => {
        api.get('standupCards/')
            .then(res => setStandups(res.data))
            .catch(err => console.error(err));
    }, []);


    return (
        <section class="w-full mb-[100px]">
            <div class="border-top-line"></div>
            <p className="text-[2.8rem] font-bold text-[#801219] mb-[1.5rem]">предыдущие стендапы</p>
            <div className="grid grid-cols-5 items-stretch relative pl-20">
              {standups.map((item) => (
                <a key={item.id} href="#" className="cursor-pointer">
                  <div className=" relative flex flex-col
                                  items-center overflow-hidden
                                  -ml-20 max-h-[90%] z-20">
                    {/* Изображение */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[25rem] flex-1 object-cover rounded-3xl"
                    />
                    {/* Полупрозрачный серый overlay */}
                    <div className="absolute inset-0 rounded-md z-0"
                       style={{backgroundColor: "rgba(17, 17, 17, 0.85)"}}
                    ></div>
                    {/* Контент поверх overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                      <h2 className="text-xl font-bold">{item.title}</h2>
                      <p>{item.city}</p>
                      <p>{item.description}</p>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
        </section>
    );
}


export default StandUpList
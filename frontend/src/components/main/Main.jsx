import {useEffect, useState} from "react";
import api from "../../api/api.js";

function Main() {

    const info = [
      { label: "продолжительность", field: "duration" },
      { label: "дата выхода", field: "created_at" },
      { label: "режиссер", field: "director" },
      { label: "дата съемки", field: "date_of_shooting" },
      { label: "субтитры", field: "subtitles" },
    ];


    const [mainCard, SetMainCard] = useState([]);

    useEffect( () => {
        api.get('mainStandup/')
            .then(res => SetMainCard(res.data))
            .catch(err => console.error(err))
    },[]);

    return (
            <section className="mt-[7em] grid justify-between gap-[60px] grid-flow-col items-start">
                <div className="text-lg text-[#801219] grid grid-flow-col gap-[30px] max-w-[824] font-medium">
                    <img className="rounded-full w-[60px] h-[60px]" src="../../../public/img/poperechnyi.png"
                         alt="poperechnyi"/>
                    <span className="">
                        <h2 className="text-3xl mb-3.5">Привет! Я Данила Поперечный.</h2>
                        <p>
                            Я занимаюсь созданием видео и стендап комедией уже больше 10 лет,
                            но скорее всего, раз ты уже здесь - ты уже знаешь, кто я.
                            Спустя столько времени, наконец-то и мы решились сделать свой
                            полноценный сайт, на котором можно приобрести мой новый стендап концерт
                            "ВЕСЕЛАЯ/ЖИЗНЬ" из Лондона, который снял Илья Найшуллер.
                            (спойлер - никакой стрельбы и кадров от первого лица
                            там нет, не обнадеживайтесь...)
                        </p>
                        <br/>
                        <p>
                            Хочу поблагодарить вас за интерес к моим проектам и за
                            приобретение этого спешла - помимо того, что это помогает
                            мне быть независимым, это ещё и напрямую отразится на качестве
                            будущих шоу и видео, которые продолжают выходить бесплатно на Ютубе
                            (пока он ещё не заблочен, естественно).
                        </p>
                        <br/>
                        <p>Спасибо за внимание и приятного просмотра!</p>
                        <br/>
                        <p>8 апреля 2023</p>
                    </span>
                </div>
                <div className="py-[43px] px-[29px] border border-white/40
                rounded-3xl grid gap-[30px] font-medium w-[375px]">
                  {mainCard.map((item, index) => (
                    <div key={index} className="grid gap-[30px] text-[15px]">
                      {info.map((name, i) => (
                        <div key={i} className="grid grid-flow-col justify-start gap-[30px]">
                          <p className="text-white/40 w-[156px]">{name.label}</p>
                          <span className="text-white">{item[name.field]}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
            </section>
    )
}

export default Main;


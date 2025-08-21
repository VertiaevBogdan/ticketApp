function Main() {

    const info = [
        { label: "продолжительность", value: "1:43:22" },
        { label: "дата выхода", value: "20 апреля 2023" },
        { label: "режиссер", value: "Илья Найшуллер" },
        { label: "дата съемки", value: "23 ноября 2022" },
        { label: "субтитры", value: "ENG" },
    ];

    return (
        <>
            <section className="relative min-h-screen w-full mt-[31em]">
                <article className="flex flex-col">
                    <div className="text-white/40 ">18+</div>
                    <h1 className="text-white mt-4 text-8xl font-bold">
                        <p className="text-6xl">СТЕНДАП СПЕШЛ</p>
                        ВЕСЕЛАЯ<span className="text-[#801219]">/</span>ЖИЗНЬ
                    </h1>
                </article>
            </section>
            <section class="flex">
                <img class="mr-11 rounded-full w-[60px] h-[60px]" src="../../../public/img/poperechnyi.png" alt="poperechnyi"/>
                <div class="text-lg text-[#801219] flex justify-between">
                    <div className="max-w-7/12">
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
                    </div>
                    <div className="py-11 px-7 border border-white/40
                 rounded-3xl flex flex-col">
                        {info.map((item, index) => (
                            <div key={index}>
                                <p className="text-white/40 ml-5">{item.label}</p>
                                <span className="text-white">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default Main;


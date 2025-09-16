 function TourBanner() {
    return (
        <section className="w-full">
            <div className="border-top-line"></div>
            <p className="text-[2.8rem] font-bold text-[#801219] mb-[1.5rem]">новый стендап тур</p>
            <img src="../../../public/img/tour/banner.png" alt="banner"
                 className="transform transition-transform
                 duration-300 ease-in-out hover:scale-[102%]"/>
        </section>
    );
 }

 export default TourBanner
export default function TourFooter() {
    return(
        <footer className="flex flex-col items-center">
            <span className="text-white font-medium text-[13px] mb-5">contact@standup813.com</span>
            <nav className="mb-5">
                <ul className="flex gap-6">
                    <li>
                        <a href="https://www.youtube.com/channel/UCR-Hcwi27-Ee6VnGzmxE1pA">
                            <img className="max-w-[2em]" src="../../../public/img/tour/rounded/youtube-c.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/spoontamer/">
                            <img className="max-w-[2em]" src="../../../public/img/tour/rounded/instagram-c.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://danilapoperechnyi.com/">
                            <img className="max-w-[2em]" src="../../../public/img/tour/rounded/logo-c.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/s/poperechnyi">
                            <img className="max-w-[2em]" src="../../../public/img/tour/rounded/youtube-c.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/Spoontamer">
                            <img className="max-w-[2em]" src="../../../public/img/tour/rounded/twitter-c.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </nav>
            <img className="h-[27px]" src="../../../public/img/tour/poperechnyi.png" alt="logo"/>
        </footer>
    );
}
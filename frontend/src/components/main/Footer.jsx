
function Footer() {
    return (
        <footer className="flex items-center justify-between">
            <nav className="inline-flex items-center space-x-11 text-white/40">
                <span>2025</span>
                <span>политика конфиденциальности</span>
                <span>оферта</span>
                <span>техподдержка</span>
            </nav>
            <nav>
                <ul className="inline-flex items-center space-x-11">
                    <li><a target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.youtube.com/@Spoontamer">
                        <img className="h-7" src="../../../public/img/youtube.png" alt="YouTube"/></a></li>
                    <li><a target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.instagram.com/spoontamer/">
                        <img className="h-7" src="../../../public/img/instagram.png" alt="Instagram"/></a></li>
                    <li><a target="_blank"
                           rel="noopener noreferrer"
                           href="https://vk.com/spoontamer">
                        <img className="h-10" src="../../../public/img/vk.png" alt="VK"/></a></li>
                    <li><a target="_blank"
                           rel="noopener noreferrer"
                           href="https://twitter.com/Spoontamer">
                        <img className="h-7" src="../../../public/img/twitter.svg" alt="Twitter"/></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
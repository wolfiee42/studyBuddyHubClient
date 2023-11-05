import { BsFacebook , BsTwitter, BsYoutube} from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-zinc-800 text-white">
            <aside>
                <img className="w-[120px] h-[120px]" src="https://i.ibb.co/QrKMZpY/Study-Buddy-Hub-removebg-preview.png" alt="" />
                <p className="font-semibold">
                Study Buddy Hub Ltd.</p> <p>
                    Together We Learn, Together We Grow</p>
                
                <p>Copyright © 2023 - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-6">
                    <Link><BsFacebook className="text-2xl"></BsFacebook></Link>
                    <Link><BsTwitter className="text-2xl"></BsTwitter></Link>
                    <Link><BsYoutube className="text-2xl"></BsYoutube></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
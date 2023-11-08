import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer flex justify-around items-center p-10 bg-zinc-800 text-white">
            <aside>
                <img className="w-[120px] h-[120px]" src="https://i.ibb.co/QrKMZpY/Study-Buddy-Hub-removebg-preview.png" alt="" />

            </aside>
            <div>
                <div className="space-y-3">
                    <p className="font-semibold text-xl">
                        Study Buddy Hub Ltd.</p> <p>
                        Together We Learn, Together We Grow</p>

                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <Link to={'https://www.facebook.com/JhankarMahbub'}><BsFacebook className="text-2xl"></BsFacebook></Link>
                        <Link to={'https://twitter.com/jhankar_mahbub'}><BsTwitter className="text-2xl"></BsTwitter></Link>
                        <Link to={'https://www.youtube.com/@JhankarMahbub'}><BsYoutube className="text-2xl"></BsYoutube></Link>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
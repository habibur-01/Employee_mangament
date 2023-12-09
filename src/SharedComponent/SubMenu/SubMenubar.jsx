import { FaPhone, FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const SubMenubar = () => {
    return (
        <div className="bg-black h-12 flex items-center  ">
            <div className="navbar container mx-auto">
                <div className="navbar-start text-white">
                    <div className="flex item-center">
                        <p className="flex items-center gap-2"><span><FaPhone /></span> +012 345 6789 | </p>
                        <p className="flex items-center ml-1 gap-2"><span><MdOutlineEmail /></span> info@example.com</p>

                    </div>
                </div>

                <div className="navbar-end gap-6 text-white">
                    <a className=""><FaFacebookF /></a>
                    <a className=""><FaTwitter /> </a>
                    <a className=""><FaLinkedinIn /></a>
                    <a className=""><FaInstagram /></a>
                </div>
            </div>
        </div>
    );
};

export default SubMenubar;
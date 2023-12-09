import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";

const Contact = () => {
    return (
        <div className="h-[600px] flex justify-center items-center">
            <div className="w-3/4 h-400px space-y-14  md:flex md:justify-around md:items-center">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <p><FaLocationDot size={30}/> </p>
                        <div>
                            <p className="text-2xl font-medium">Our Location</p>
                            <p>123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <p><FaPhone size={30}/> </p>
                        <div>
                            <p className="text-2xl font-medium">Call Us</p>
                            <p>+012 345 6789</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <p><MdOutlineEmail size={30}/> </p>
                        <div>
                            <p className="text-2xl font-medium">Email Us</p>
                            <p>info@example.com</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p className="text-[#F14D5D]">Need Help?</p>
                    <p className="text-2xl font-medium">Send Us A Message</p>
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="message" className="input input-bordered" required ></textarea>
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;
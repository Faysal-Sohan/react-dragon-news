
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div>
                <h3 className="text-xl font-semibold">Login With</h3>
                <button className="w-full mt-5 p-2 flex justify-center items-center gap-2 border border-blue-500 rounded-lg text-blue-500">
                    <FaGoogle></FaGoogle>Login With Google
                </button>
                <button className="w-full mt-2 p-2 flex justify-center items-center gap-2 border border-black rounded-lg">
                    <FaGithub></FaGithub>Login With Google
                </button>
            </div>
            <div className="mt-7">
                <h3 className="text-xl font-semibold">Find Us On</h3>
                <div className="mt-2 flex items-center gap-2 text-xl text-gray-500 border rounded-t p-3">
                    <FaFacebook></FaFacebook>
                    <p>Facebook</p>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-500 border-x p-3">
                    <FaTwitter></FaTwitter>
                    <p>Twitter</p>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-500 border rounded-b p-3">
                    <FaInstagram></FaInstagram>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="mt-7 bg-gray-100">
                <h3 className="text-xl font-semibold p-3 mb-3">Q-Zone</h3>
                <img src={qZone2} alt="" className="mb-3" />
                <img src={qZone3} alt="" className="mb-3" />
                <img src={qZone1} alt="" className="pb-3" />
            </div>
            <div className=" mt-7 hero bg-hero-bg">
                <div className="bg-black hero-overlay bg-opacity-60"></div>
                <div className="py-16 px-7 text-center text-white space-y-5">
                    <h3 className="text-3xl font-bold">Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="bg-red-600 text-white px-5 py-2 text-xl font-medium">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;
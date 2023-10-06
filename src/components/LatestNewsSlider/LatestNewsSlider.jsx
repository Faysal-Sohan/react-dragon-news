import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNewsSlider = () => {
    return (
        <div className="flex p-4 gap-5 bg-gray-100 mt-7">
            <button className="bg-red-700 text-white px-6 py-2 text-2xl font-medium">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link to={'/'}>
                    <p className="text-[18px] font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNewsSlider;
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins max-w-[1140px] mx-auto my-12">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
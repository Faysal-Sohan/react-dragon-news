import AllNews from "../../components/AllNews/AllNews";
import LatestNewsSlider from "../../components/LatestNewsSlider/LatestNewsSlider";
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestNewsSlider></LatestNewsSlider>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <AllNews></AllNews>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
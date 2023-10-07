import { useParams } from "react-router-dom";
import Header from "../../components/shared/Header/Header";
import Navbar from "../../components/shared/Navbar/Navbar";
import RightSideNav from "../../components/shared/RightSideNav/RightSideNav";

const NewsDetails = () => {

    const {id} = useParams();
    console.log(id)

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 grid-cols-1 mt-7">
                <div className="md:col-span-3">
                    <h3 className="text-3xl font-bold">News Details here</h3>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;
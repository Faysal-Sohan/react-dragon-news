import { NavLink } from "react-router-dom";
import news1 from '../../assets/1.png'
import news2 from '../../assets/2.png'
import news3 from '../../assets/3.png'
import { FaCalendar } from 'react-icons/fa'
import { useEffect, useState } from "react";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('data/categories.json')
        .then(resp => resp.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h3 className="text-xl font-semibold mb-5">All Category</h3>
            <ul className="menu menu-vertical px-1 text-xl font-medium text-gray-500">
                {
                    categories.map(category => <li key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>)
                }
            </ul>
            <div className="bg-base-100 mb-4">
                <figure><img src={news1} alt="Shoes" /></figure>
                <div className="mt-4">
                    <h2 className="px-0 text-xl font-medium mb-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex gap-4">
                        <p>Sports</p>
                        <p className="text-gray-400 flex items-center gap-2"><FaCalendar></FaCalendar>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="bg-base-100">
                <figure><img src={news2} alt="Shoes" /></figure>
                <div className="mt-4">
                    <h2 className="px-0 text-xl font-medium mb-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex gap-4">
                        <p>Sports</p>
                        <p className="text-gray-400 flex items-center gap-2"><FaCalendar></FaCalendar>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="bg-base-100">
                <figure><img src={news3} alt="Shoes" /></figure>
                <div className="mt-4">
                    <h2 className="px-0 text-xl font-medium mb-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <div className="flex gap-4">
                        <p>Sports</p>
                        <p className="text-gray-400 flex items-center gap-2"><FaCalendar></FaCalendar>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;
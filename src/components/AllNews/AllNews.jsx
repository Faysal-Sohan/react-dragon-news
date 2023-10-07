import { useEffect, useState } from "react";
import News from "../News/News";


const AllNews = () => {

    const [allNews, setAllNews] = useState([]);
    useEffect(() => {
        fetch('data/news.json')
        .then(resp => resp.json())
        .then(data => setAllNews(data))
    },[])


    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Dragon News Home</h3>
            <div className="flex flex-col gap-4">
                {
                    allNews.slice(0,6).map(news => <News key={news._id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default AllNews;
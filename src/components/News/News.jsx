import { FaBookmark, FaShareAlt } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const News = ({news}) => {

    const {_id, rating, total_view, title, author, thumbnail_url, details} = news;

    return (
        <div>
            <div className='flex items-center justify-between bg-gray-100 px-5 py-3 rounded-t-lg'>
                <div className='flex gap-2'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={author.img} />
                        </div>
                    </label>
                    <div>
                        <h3 className='font-semibold'>{author.name}</h3>
                        <p className='text-gray-500 text-sm'>{author.published_date}</p>
                    </div>
                </div>
                <div className='text-gray-500 text-xl flex gap-2'>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>
            <div className='px-5 border rounded-sm pt-4'>
                <h3 className='text-xl font-bold mb-3'>
                    {title}
                </h3>
                <img src={thumbnail_url} alt="" className='mb-4 w-full h-[240px]' />
                <p className='text-gray-500 mb-1 max-h-36 whitespace-pre-line text-ellipsis overflow-hidden'>{details}</p>
                <Link to={`/details/${_id}`}><p className='font-semibold text-orange-400 mb-3'>Read More</p></Link>
                <div className='py-3 border-t flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className="rating gap-2 rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p className='text-gray-500'>{rating.number}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiShow></BiShow>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    news: PropTypes.object
}

export default News;
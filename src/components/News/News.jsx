import defaultUserPhoto from '../../assets/user.png'
import { FaBookmark, FaShareAlt } from 'react-icons/fa'
import { BiShow } from 'react-icons/bi'
import editor1 from '../../assets/editorsInsight1.png'

const News = () => {
    return (
        <div>
            <div className='flex items-center justify-between bg-gray-100 px-5 py-3 rounded-t-lg'>
                <div className='flex gap-2'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={defaultUserPhoto} />
                        </div>
                    </label>
                    <div>
                        <h3 className='font-semibold'>Awlad Hossain</h3>
                        <p className='text-gray-500 text-sm'>2022-08-21</p>
                    </div>
                </div>
                <div className='text-gray-500 text-xl flex gap-2'>
                    <FaBookmark></FaBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </div>
            <div className='px-5 border rounded-sm pt-4'>
                <h3 className='text-xl font-bold mb-3'>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                </h3>
                <img src={editor1} alt="" className='mb-4' />
                <p className='text-gray-500 mb-3'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...<br />
                    <span className='font-semibold text-orange-400'>Read More</span></p>
                <div className='py-3 border-t flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className="rating gap-2 rating-sm">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                        <p className='text-gray-500'>4.9</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <BiShow></BiShow>
                        <p>499</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
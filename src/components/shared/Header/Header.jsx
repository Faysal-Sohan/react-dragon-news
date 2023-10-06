import moment from 'moment/moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mb-5' src={logo} alt="" />
            <p className='text-gray-500 mb-2'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-gray-500'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
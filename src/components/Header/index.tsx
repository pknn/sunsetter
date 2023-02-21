import place from '../../assets/place.png';
import cheesySlogan from '../../assets/cheesy-slogan.png';
import './header.css';

const Header = () => (
    <div className="flex justify-between">
        <div>
            <div className="w-8 border-b border-b-1 border-b-black mb-2"></div>
            <img className="place-image" src={place}/>
        </div>
        <div>
            <img className="cheesy-slogan-image" src={cheesySlogan}/>
        </div>
    </div>
)

export default Header;

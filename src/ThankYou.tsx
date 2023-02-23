import loveLetter from './assets/love-letter.png';
import sendNewLetterButton from './assets/send-new-letter-button.png';
import {useNavigate} from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();

    const handleSendNewLetterButtonClick = () => {
        navigate('/send-love');
    };

    return (
        <div
            className="publisher-box w-screen h-screen px-8 py-12 relative flex flex-col gap-8 justify-center items-center text-white text-3xl">
            <div>
                <img src={loveLetter}/>
            </div>
            <div>
                <button onClick={handleSendNewLetterButtonClick}>
                    <img src={sendNewLetterButton}/>
                </button>
            </div>
        </div>
    );
};

export default ThankYou;

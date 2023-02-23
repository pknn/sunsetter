import backButton from '../../assets/back.png';
import cheers from '../../assets/cheers.png';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import submitButton from '../../assets/submit-button.png';

interface Props {
    isNameEmpty: boolean;
    message: string;
    onMessageChange: (message: string) => void;
    onBackButtonClick: () => void;
    onDoneButtonClick: () => void;
}

const MessageInput = ({isNameEmpty, message, onMessageChange, onBackButtonClick, onDoneButtonClick}: Props) => {
    const [showDoneButton, setShowDoneButton] = useState(message.length > 0);

    useEffect(() => {
        if (isNameEmpty) {
            onBackButtonClick();
        }
    }, []);
    const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 80) {
            return;
        }

        setShowDoneButton(event.target.value.length > 0);

        onMessageChange(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onDoneButtonClick();
        }
    };

    return (
        <div className="h-full gap-16 overflow-hidden">
            <div className="flex items-start w-full">
                <button onClick={onBackButtonClick} className="w-24">
                    <img src={backButton} alt="Back button"/>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full gap-16">
                <img className="w-52" src={cheers} alt="Cheers"/>
                <input
                    value={message}
                    onChange={handleMessageChange}
                    onKeyDown={handleKeyDown}
                    className="text-center w-full p-2 bg-transparent message-input border-b border-b-1 outline-none caret-white	text-white rounded-none"
                    type="text"
                    enterKeyHint="send"
                    placeholder="อยากบอก นัน & เทส ว่าอะไร ✨"
                />
                <button onClick={onDoneButtonClick}
                        className={`${!showDoneButton ? 'opacity-0' : 'opacity-1'} transition-all duration-300`}>
                    <img src={submitButton} alt="Submit button"/>
                </button>
            </div>
        </div>
    );
};

export default MessageInput;

import yourName from '../../assets/your-name.png';
import nextButton from '../../assets/next-button.png';
import './name-input.css';
import {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';

interface Props {
    name: string;
    onNameChange: (name: string) => void;
    onNextButtonClick: () => void;
}

const NameInput = ({name, onNameChange, onNextButtonClick}: Props) => {
    const [showNextButton, setShowNextButton] = useState(name.length > 0);

    const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 80) {
            return;
        }

        setShowNextButton(event.target.value.length > 0);

        onNameChange(event.target.value);
    }, [name, onNameChange, onNextButtonClick]);

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onNextButtonClick();
        }
    };

    return (
        <div className="h-full flex flex-col justify-center items-center gap-16 overflow-hidden">
            <img className="w-52" src={yourName} alt="Your name"/>
            <input
                value={name}
                onChange={handleNameChange}
                onKeyDown={handleKeyDown}
                className="text-center w-full p-2 bg-transparent message-input border-b border-b-1 outline-none caret-white	text-white"
                type="text"
                enterKeyHint="next"
                placeholder="พิมพ์ชื่อที่นี่ 😘"
            />
            <button onClick={onNextButtonClick}
                    className={`${!showNextButton ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}>
                <img src={nextButton} alt="Next button"/>
            </button>
        </div>
    );
}

export default NameInput;

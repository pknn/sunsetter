import yourName from '../../assets/your-name.png';
import nextButton from '../../assets/next-button.png';
import './name-input.css';
import {ChangeEvent, useCallback} from 'react';

interface Props {
    name: string;
    onNameChange: (name: string) => void;
    onNextButtonClick: () => void;
}

const NameInput = ({name, onNameChange, onNextButtonClick}: Props) => {
    const handleNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 80) {
            return;
        }

        onNameChange(event.target.value);
    }, [name, onNameChange, onNextButtonClick]);

    return (
        <div className="h-full flex flex-col justify-center items-center gap-16 overflow-hidden">
            <img className="w-52" src={yourName} alt="Your name"/>
            <input
                value={name}
                onChange={handleNameChange}
                className="text-center w-full p-2 bg-transparent message-input border-b border-b-1 outline-none caret-white	text-white"
                type="text"
                enterKeyHint="next"
                placeholder="ชื่ออะไรบอกกันหน่อย 😘"/>
            <button onClick={onNextButtonClick}>
                <img src={nextButton} alt="Next button"/>
            </button>
        </div>
    );
}

export default NameInput;

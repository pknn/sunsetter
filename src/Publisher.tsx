import NameInput from './components/NameInput';
import {useMemo, useState} from 'react';
import MessageInput from './components/MessageInput';
import {useMessagePublisher} from './hooks/useMessagePublisher';
import {useNavigate} from "react-router-dom";

type Screen = 'name' | 'blessing';

const Publisher = () => {
    const [screen, setScreen] = useState<Screen>('name');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const isNameEmpty = useMemo(() => name.replaceAll(' ', '').length <= 0, [name]);

    const navigate = useNavigate();

    const sendMessage = useMessagePublisher();

    const handleNameChange = (name: string) => {
        setName(name);
    };

    const handleNextButtonClick = () => {
        if (isNameEmpty) return;
        setScreen('blessing');
    };

    const handleMessageChange = (message: string) => {
        setMessage(message);
    };

    const handleBackButtonClick = () => {
        setScreen('name');
    };

    const handleDoneButtonClick = async () => {
        if (message.replaceAll(' ', '').length === 0) return;

        navigate('/thank-you');
        // await sendMessage(message, name);
    };

    return (
        <div className="publisher-box w-screen h-screen px-8 py-12 relative">
            {
                screen == 'name'
                    ? <NameInput
                        name={name}
                        onNameChange={handleNameChange}
                        onNextButtonClick={handleNextButtonClick}
                    />
                    : <MessageInput
                        isNameEmpty={isNameEmpty}
                        message={message}
                        onMessageChange={handleMessageChange}
                        onBackButtonClick={handleBackButtonClick}
                        onDoneButtonClick={handleDoneButtonClick}
                    />
            }
        </div>
    );
};

export default Publisher;

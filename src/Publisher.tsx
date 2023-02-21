import NameInput from './components/NameInput';
import {useState} from 'react';

type Screen = 'name' | 'blessing';

const Publisher = () => {
    const [screen, setScreen] = useState<Screen>('name');
    const [name, setName] = useState('');

    const handleNameChange = (name: string) => {
        setName(name);
    };

    const handleNextButtonClick = () => {
        setScreen('blessing');
    }

    return (
        <div className="publisher-box w-screen h-screen px-8 py-12 relative">
            {screen == 'name' ?
                <NameInput
                    name={name}
                    onNameChange={handleNameChange}
                    onNextButtonClick={handleNextButtonClick}
                /> : null}
        </div>
    );
};

export default Publisher;

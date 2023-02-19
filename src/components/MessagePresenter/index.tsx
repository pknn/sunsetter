import {useMessageReceiver} from '../../hooks/useMessageReceiver';
import ReactTextTransition from "react-text-transition";
import './message-presenter.css';

const MessagePresenter = () => {
    const {message} = useMessageReceiver();

    return (
        <ReactTextTransition
            className="w-4/5 text-white text-center text-lg md:text-5xl relative mx-auto top-1/2 inset-0"
        >
            {message}
        </ReactTextTransition>
    );
};

export default MessagePresenter;

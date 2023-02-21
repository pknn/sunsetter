import {useMessageReceiver} from '../../hooks/useMessageReceiver';
import ReactTextTransition from "react-text-transition";
import './message-presenter.css';

const MessagePresenter = () => {
    const {message, writer} = useMessageReceiver();

    return (
        <div className="relative h-full">
            <ReactTextTransition
                className="w-full text-white text-center text-lg md:text-3xl text-center absolute inset-0 mx-auto"
            >
                <div>{message}</div>
                <div className="flex justify-center mt-4">
                    <div className="w-10 border-b border-b-1 border-b-black -translate-y-3 mr-4"></div>
                    <div className="text-base">{writer}</div>
                    <div className="w-10 border-b border-b-1 border-b-black -translate-y-3 ml-4"></div>
                </div>
            </ReactTextTransition>
        </div>
    );
};

export default MessagePresenter;

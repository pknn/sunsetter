import {useMessageReceiver} from '../../hooks/useMessageReceiver';

const MessagePresenter = () => {
    const {message} = useMessageReceiver();

    return (
        <p className="w-4/5 text-white text-center text-lg md:text-5xl relative mx-auto top-1/2 inset-0">
            {message}
        </p>
    );
};

export default MessagePresenter;

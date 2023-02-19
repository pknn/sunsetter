import {useMessageReceiver} from '../../hooks/useMessageReceiver';

const MessagePresenter = () => {
    const {message} = useMessageReceiver();

    return (
        <>
            <p className="w-4/5 text-white text-center text-lg absolute inset-0 top-1/2 m-auto">
                {message}
            </p>
        </>
    );
};

export default MessagePresenter;

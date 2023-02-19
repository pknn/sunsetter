import {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import {useMessagePublisher} from '../../hooks/useMessagePublisher';
import useAutoResizeTextArea from '../../hooks/useAutoResizeTextArea';

const MessageInput = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [value, setValue] = useState('');
    const publish = useMessagePublisher();

    useAutoResizeTextArea(textAreaRef.current, value);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };

    const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            event.stopPropagation();

            await publish(value);
            setValue('');
        }
    };

    return (
        <textarea
            value={value}
            ref={textAreaRef}
            rows={1}
            className="resize-none w-4/5 max-h-fit text-white text-center text-lg absolute inset-x-0 top-1/2 m-auto min-h-fit bg-transparent outline-none focus:outline-none border-b border-b-2 overflow-hidden rounded-none"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
        />
    );
}

export default MessageInput;

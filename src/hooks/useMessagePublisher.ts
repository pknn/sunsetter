import {useEffect} from 'react';
import getClient from '../client/supabase';

export const useMessagePublisher = () => {
    useEffect(() => {
        const client = getClient();
        const interval = setInterval(() => {
            // client.from('messages').insert({
            //     content: 'Hello 1'
            // })
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);
};

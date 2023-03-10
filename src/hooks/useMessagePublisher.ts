import getClient from '../client/supabase';

export const useMessagePublisher = () => {
    const client = getClient();

    return async (message: string, writer: string) => {
        await client.from('messages').insert({
            content: message,
            writer: writer,
        });
    };
};

import {useCallback, useEffect, useState} from 'react';
import getClient from '../client/supabase';
import {RealtimePostgresInsertPayload} from '@supabase/supabase-js';

export const useMessageReceiver = () => {
    const [message, setMessage] = useState('Nun Test Wedding');
    const [isLoading, setIsLoading] = useState(true);

    const handleNewMessage = useCallback((message: RealtimePostgresInsertPayload<any>) => {
        setMessage(message.new.content);
    }, []);

    const initializeMessage = async () => {
        const supabase = getClient();
        const message = await supabase.from('messages')
            .select('content')
            .order('created_at', {ascending: false})
            .limit(1)
            .maybeSingle();

        if (message.data != null) {
            setMessage(message.data.content);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        const supabase = getClient();
        const channel = supabase.channel('any');

        initializeMessage();

        channel
            .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'messages'}, handleNewMessage)
            .subscribe();

        return () => {
            channel.unsubscribe();
        };
    }, []);

    return {
        message,
        isLoading,
    };
};

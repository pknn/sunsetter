import {useCallback, useEffect, useState} from 'react';
import getClient from '../client/supabase';
import {RealtimePostgresInsertPayload} from '@supabase/supabase-js';

export const useMessageReceiver = () => {
    const [message, setMessage] = useState('');
    const [writer, setWriter] = useState('')

    const handleNewMessage = useCallback((message: RealtimePostgresInsertPayload<any>) => {
        setMessage(message.new.content);
        setWriter(`( ${message.new.writer} )`);
    }, []);

    const initializeMessage = async () => {
        const supabase = getClient();
        const message = await supabase.from('messages')
            .select('content,writer')
            .order('created_at', {ascending: false})
            .limit(1)
            .maybeSingle();

        if (message.data != null) {
            setMessage(message.data.content);
            setWriter(`( ${message.data.writer} )`);
        }

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
        writer,
    };
};

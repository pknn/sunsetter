import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SP_URL
const supabaseKey = import.meta.env.VITE_APP_SP_KEY

const client = createClient(supabaseUrl, supabaseKey);
const getClient = () => client;

export default getClient;

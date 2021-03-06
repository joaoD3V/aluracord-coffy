import { createClient } from '@supabase/supabase-js';
import { MessageProps } from 'components/Message';

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getAllDatafromDatabase(database: string) {
  const { data } = await supabaseClient
    .from<MessageProps>(database)
    .select('*')
    .order('created_at', { ascending: true });
  return data;
}

export async function insertNewDataOnDatabase(
  database: string,
  message: Omit<MessageProps, 'created_at'>
) {
  try {
    const { data } = await supabaseClient
      .from<MessageProps>(database)
      .insert([message]);
    return data ? data[0] : ({} as MessageProps);
  } catch (error) {
    console.log(error);
  }
}

export function subscribeOnDatabase(
  database: string,
  addNewMessage: (newMessage: MessageProps) => void
) {
  return supabaseClient
    .from<MessageProps>(database)
    .on('INSERT', (response) => addNewMessage(response.new))
    .subscribe();
}

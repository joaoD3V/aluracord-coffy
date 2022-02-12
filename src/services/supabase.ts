import { createClient } from '@supabase/supabase-js';
import { MessageProps } from 'components/Message';

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getAllDatafromDatabase(database: string) {
  const { data } = await supabaseClient
    .from<MessageProps>(database)
    .select('*');
  return data;
}

export async function insertNewDataOnDatabase(
  database: string,
  message: Omit<MessageProps, 'created_at'>
) {
  console.log('Na função', message);
  try {
    const { data } = await supabaseClient
      .from<MessageProps>(database)
      .insert([message]);
    return data ? data[0] : ({} as MessageProps);
  } catch (error) {
    console.log(error);
  }
}

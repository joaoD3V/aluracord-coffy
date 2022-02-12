/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';

import { useState, KeyboardEvent, useEffect, MouseEvent } from 'react';

import { v4 as uuidv4 } from 'uuid';

import MessageList from 'components/MessageList';
import { MessageProps } from 'components/Message';
import { useUser } from 'components/hooks/useUser';
import { ProfileProps } from 'templates/Home';
import MediaMatch from 'components/MediaMatch';

import { Send } from '@styled-icons/feather/Send';

import * as S from './styles';
import {
  getAllDatafromDatabase,
  insertNewDataOnDatabase,
} from 'services/supabase';

export default function Chat() {
  const [messagesList, setMessagesList] = useState<MessageProps[]>([]);
  const [message, setMessage] = useState('');
  const { user } = useUser();
  const router = useRouter();

  async function handleSubmitMessage(
    event: KeyboardEvent | MouseEvent,
    message: string
  ) {
    event.preventDefault();

    const newMessage: Omit<MessageProps, 'created_at'> = {
      id: uuidv4(),
      avatar_url: user.avatar_url,
      login: user.login,
      name: user.name,
      text: message,
    };

    const data = await insertNewDataOnDatabase('messages', newMessage);
    if (data) {
      return setMessagesList([...messagesList, data]);
    }
  }

  async function handleGetMessages() {
    try {
      const messages = await getAllDatafromDatabase('messages');
      return setMessagesList(messages ? messages : ([] as MessageProps[]));
    } catch (e) {
      return console.log(e);
    }
  }

  useEffect(() => {
    const defaultUser: ProfileProps = {
      login: 'coffybucks',
      avatar_url: '/img/profile.gif',
      name: 'Coffy',
    };

    user.login === defaultUser.login && router.push('/');

    handleGetMessages();
  }, []);

  return (
    <S.Wrapper>
      <S.Box>
        <S.Header>
          <span>Chat</span>
          <S.Logout>Logout</S.Logout>
        </S.Header>

        <MessageList messages={messagesList} />

        <S.Form>
          <S.Input
            placeholder="Insira sua mensagem aqui"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && message) {
                handleSubmitMessage(e, message);
                setMessage('');
              }
            }}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <MediaMatch lessThan="medium">
            <S.Send
              onClick={(e) => {
                handleSubmitMessage(e, message);
                setMessage('');
              }}
            >
              <Send />
            </S.Send>
          </MediaMatch>
          <S.Sticker>😋</S.Sticker>
        </S.Form>
      </S.Box>
    </S.Wrapper>
  );
}

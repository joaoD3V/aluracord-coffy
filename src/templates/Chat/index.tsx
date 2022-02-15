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

import { stickers } from 'components/Stickers/stickers';

import * as S from './styles';
import {
  getAllDatafromDatabase,
  insertNewDataOnDatabase,
} from 'services/supabase';
import Loading from 'components/Loading';
import Stickers from 'components/Stickers';

export default function Chat() {
  const [messagesList, setMessagesList] = useState<MessageProps[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openStickers, setOpenStickers] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  async function handleSubmitMessage(
    event: KeyboardEvent | MouseEvent,
    message: string,
    isSticker: boolean
  ) {
    event.preventDefault();

    const newMessage: Omit<MessageProps, 'created_at'> = {
      id: uuidv4(),
      avatar_url: user.avatar_url,
      login: user.login,
      name: user.name,
      text: message,
      isSticker,
    };

    const data = await insertNewDataOnDatabase('messages', newMessage);
    if (data) {
      return setMessagesList([...messagesList, data]);
    }
  }

  async function handleGetMessages() {
    try {
      setIsLoading(true);
      const messages = await getAllDatafromDatabase('messages');
      setMessagesList(messages ? messages : ([] as MessageProps[]));
      return setIsLoading(false);
    } catch (e) {
      return console.log(e);
    }
  }

  function handleOpenCloseStickers() {
    setOpenStickers(!openStickers);
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
      {isLoading ? (
        <Loading />
      ) : (
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
                  handleSubmitMessage(e, message, false);
                  setMessage('');
                }
              }}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <MediaMatch lessThan="medium">
              <S.Send
                onClick={(e) => {
                  handleSubmitMessage(e, message, false);
                  setMessage('');
                }}
              >
                <Send />
              </S.Send>
            </MediaMatch>
            <S.StickerButton onClick={handleOpenCloseStickers}>
              😋
            </S.StickerButton>
          </S.Form>

          <S.StickersArea openStickers={openStickers}>
            <Stickers
              stickers={stickers}
              handleSubmitMessage={handleSubmitMessage}
              handleOpenCloseStickers={handleOpenCloseStickers}
            />
          </S.StickersArea>
        </S.Box>
      )}
    </S.Wrapper>
  );
}
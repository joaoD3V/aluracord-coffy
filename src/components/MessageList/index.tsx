import Message, { MessageProps } from 'components/Message';
import { useEffect, useRef } from 'react';
import * as S from './styles';

export type MessageListProps = {
  messages: MessageProps[];
};

export default function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <S.Wrapper>
      {messages.map((message) => (
        <Message {...message} key={message.id} ref={messagesEndRef} />
      ))}
    </S.Wrapper>
  );
}

import React, { forwardRef } from 'react';
import { ProfileProps } from 'templates/Home';
import { formatDate, formatTime } from 'utils/format-date';

import * as S from './styles';

export type MessageProps = {
  id: string;
  created_at: string;
  text: string;
} & ProfileProps;

const Message: React.ForwardRefRenderFunction<HTMLDivElement, MessageProps> = (
  { avatar_url, login, text, created_at },
  ref
) => {
  const date = formatDate(new Date(created_at));
  const time = formatTime(new Date(created_at));
  const today = formatDate(new Date());
  return (
    <S.Wrapper ref={ref}>
      <S.Header>
        <S.Profile profile={avatar_url} />
        <S.Nickname>{login}</S.Nickname>
        <S.Timestamp>
          {time} - {date === today ? 'Hoje' : date}
        </S.Timestamp>
      </S.Header>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default forwardRef(Message);

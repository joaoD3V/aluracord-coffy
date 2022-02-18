import { MouseEvent } from 'react';
import * as S from './styles';

export type StickersProps = {
  stickers: string[];
  handleSubmitMessage: (
    message: string,
    isSticker: boolean,
    event: MouseEvent
  ) => Promise<void>;
  handleOpenCloseStickers: () => void;
};

export default function Stickers({
  stickers,
  handleSubmitMessage,
  handleOpenCloseStickers,
}: StickersProps) {
  return (
    <S.Wrapper>
      <S.Title>Stickers</S.Title>
      <S.Content>
        {stickers.map((sticker, index) => (
          <S.Sticker
            key={index}
            src={sticker}
            alt="sticker"
            onClick={(e) => {
              handleSubmitMessage(sticker, true, e);
              handleOpenCloseStickers();
            }}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  );
}

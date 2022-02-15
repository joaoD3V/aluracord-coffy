import { MouseEvent } from 'react';
import * as S from './styles';

export type StickersProps = {
  stickers: string[];
  handleSubmitMessage: (
    event: MouseEvent,
    message: string,
    isSticker: boolean
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
              handleSubmitMessage(e, sticker, true);
              handleOpenCloseStickers();
            }}
          />
        ))}
      </S.Content>
    </S.Wrapper>
  );
}

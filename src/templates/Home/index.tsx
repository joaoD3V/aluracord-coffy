import Input from 'components/Input';
import * as S from './styles';

export default function Home() {
  const nickname = 'joaoD3V';

  return (
    <S.Wrapper>
      <S.Box>
        <S.TextArea>
          <S.Title>Seja bem vindo ao Coffy!</S.Title>
          <S.Description>Pegue um café e vamos conversar</S.Description>
        </S.TextArea>

        <S.Form>
          <Input name="nick" />
          <S.Button>Entrar</S.Button>
        </S.Form>

        <S.ImageAre>
          <S.Profile />
          <S.Nick>{nickname}</S.Nick>
        </S.ImageAre>
      </S.Box>
    </S.Wrapper>
  );
}

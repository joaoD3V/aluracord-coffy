import * as S from './styles';

export default function Loading() {
  return (
    <S.Wrapper>
      <S.Text>Esperando o café esfriar</S.Text>
      <S.Loading src="/img/loading.gif" alt="Animação de um café" />
    </S.Wrapper>
  );
}

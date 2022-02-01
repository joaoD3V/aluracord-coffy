import * as S from './styles';

export type Profile = {
  img: string;
  nick: string;
};

export type HomeTemplateProps = {
  profile?: Profile;
};

export default function Home({
  profile = { img: '/img/profile.gif', nick: 'coffy' },
}: HomeTemplateProps) {
  return (
    <S.Wrapper>
      <S.Box>
        <S.Action>
          <S.TextArea>
            <S.Title>Seja bem vindo ao Coffy! ☕</S.Title>
            <S.Description>Pegue um café e vamos conversar</S.Description>
          </S.TextArea>

          <S.Form>
            <S.Input placeholder="Digite seu nick do github" />
            <S.Button>Entrar</S.Button>
          </S.Form>
        </S.Action>

        <S.ImageArea>
          <S.Profile profile={profile.img} />
          <S.Nick>{profile.nick}</S.Nick>
        </S.ImageArea>
      </S.Box>
    </S.Wrapper>
  );
}

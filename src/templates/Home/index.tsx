/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import Toastify, { showToast } from 'components/Toastify';
import { useEffect, useState } from 'react';
import * as S from './styles';

export type ProfileProps = {
  login: string;
  avatar_url: string;
  name: string;
};

export default function Home() {
  const [nickname, setNickname] = useState('');
  const [user, setUser] = useState<ProfileProps>({
    login: 'coffy',
    avatar_url: '/img/profile.gif',
    name: 'Coffy',
  });

  async function getUser(user: string) {
    return await axios.get<ProfileProps>(
      `https://api.github.com/users/${user}`
    );
  }

  async function checkGithubUser(user: string) {
    if (user) {
      try {
        const { data } = await getUser(user);
        setUser({ ...data });
      } catch {
        showToast('error', 'Usuário não encontrado');
      }
    } else {
      setUser({
        login: 'coffy',
        avatar_url: '/img/profile.gif',
        name: 'Coffy',
      });
    }
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      await checkGithubUser(nickname);
    }, 500);

    return () => clearTimeout(timer);
  }, [nickname]);

  return (
    <S.Wrapper>
      <Toastify />
      <S.Box>
        <S.Action>
          <S.TextArea>
            <S.Title>Seja bem vindo ao Coffy! ☕</S.Title>
            <S.Description>Pegue um café e vamos conversar</S.Description>
          </S.TextArea>

          <S.Form>
            <S.Input
              name="nickname"
              placeholder="Digite seu nick do github"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
            <S.Button>Entrar</S.Button>
          </S.Form>
        </S.Action>

        <S.ImageArea>
          {user.login === 'Coffy' ? (
            <>
              <S.Profile profile={user.avatar_url} />
              <S.Nick>coffy</S.Nick>
            </>
          ) : (
            <>
              <S.Profile profile={user.avatar_url} />
              <S.Nick>{user.login}</S.Nick>
            </>
          )}
        </S.ImageArea>
      </S.Box>
    </S.Wrapper>
  );
}

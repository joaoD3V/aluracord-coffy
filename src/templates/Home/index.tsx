/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';

import { FormEvent, useEffect, useState } from 'react';

import axios from 'axios';

import Toastify, { showToast } from 'components/Toastify';
import { useUser } from 'components/hooks/useUser';

import * as S from './styles';

export type ProfileProps = {
  login: string;
  avatar_url: string;
  name?: string;
};

export default function Home() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const { user, handleSetUser } = useUser();

  async function getUser(user: string) {
    return await axios.get<ProfileProps>(
      `https://api.github.com/users/${user}`
    );
  }

  async function checkGithubUser(user: string) {
    if (user) {
      try {
        const { data } = await getUser(user);
        handleSetUser({ ...data });
      } catch {
        showToast('error', 'Usuário não encontrado');
      }
    } else {
      handleSetUser({
        login: 'coffybucks',
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

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    router.push('/chat');
  }

  return (
    <S.Wrapper>
      <Toastify />
      <S.Box>
        <S.Action>
          <S.TextArea>
            <S.Title>Seja bem vindo ao Coffy! ☕</S.Title>
            <S.Description>Pegue um café e vamos conversar</S.Description>
          </S.TextArea>

          <S.Form onSubmit={handleSubmit}>
            <S.Input
              name="nickname"
              placeholder="Digite seu nick do github"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
            <S.Button type="submit" disabled={user.login === 'coffybucks'}>
              Entrar
            </S.Button>
          </S.Form>
        </S.Action>

        <S.ImageArea>
          {user.login === 'coffybucks' ? (
            <>
              <S.Profile profile={user.avatar_url} />
              <S.Nick>coffybucks</S.Nick>
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

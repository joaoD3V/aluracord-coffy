import { createContext, useState } from 'react';

import { ProfileProps } from 'templates/Home';

type UserContextType = {
  user: ProfileProps;
  handleSetUser: (user: ProfileProps) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<ProfileProps>({
    login: 'coffybucks',
    avatar_url: '/img/profile.gif',
    name: 'Coffy',
  });

  function handleSetUser(user: ProfileProps) {
    setUser(user);
  }

  return (
    <UserContext.Provider value={{ user, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
}

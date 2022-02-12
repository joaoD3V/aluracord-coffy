import { UserContext } from 'contexts/UserContext';
import { useContext } from 'react';

export function useUser() {
  const value = useContext(UserContext);

  return value;
}

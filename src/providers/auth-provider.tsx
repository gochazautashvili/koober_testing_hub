'use client';
import { User } from 'lucia';
import { createContext, ReactNode, useContext } from 'react';

const AuthContent = createContext<User | null>(null);

export const AuthProvider = ({ children, user }: { children: ReactNode; user: User }) => {
  return <AuthContent.Provider value={user}>{children}</AuthContent.Provider>;
};

export const useAuth = () => {
  const user = useContext(AuthContent);

  if (!user) throw new Error('useAuth must be used within a AuthProvider');

  return user;
};

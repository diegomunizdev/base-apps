import { createContext, useContext } from 'react';

type HomeContextProps = {};

export const HomeContext = createContext<HomeContextProps>(
  {} as unknown as HomeContextProps
);

export const useHomeContext = () => useContext(HomeContext);

import { createContext, useContext } from 'react';

export type LayoutContextProps = {
  theme: string;
  handleTheme: () => void;
};

export const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

export const useLayoutContext = () => useContext(LayoutContext);

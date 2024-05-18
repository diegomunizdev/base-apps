import { PropsWithChildren, useMemo } from 'react';

import { HomeContext } from '../../../application/contexts/home/home.context';

export const HomeProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const value = useMemo(() => ({}), []);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

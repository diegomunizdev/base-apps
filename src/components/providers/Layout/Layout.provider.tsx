import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { LayoutContext } from '../../../application/contexts/layout/layout.context';

export const LayoutProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [theme, setTheme] = useState<string>('light');

  const handleTheme = useCallback(() => {
    setTheme((state) => (state === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ theme, handleTheme }), [handleTheme, theme]);

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

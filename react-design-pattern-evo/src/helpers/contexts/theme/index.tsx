import { createContext, useEffect, useMemo, useState } from 'react';
import { AppTheme, AppThemeContext } from '@commonContexts/theme/types';

export const ThemeContext = createContext<AppThemeContext | undefined>(
  undefined
);

export default function AppThemeProvider({ children }: React.PropsWithChildren) {
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<AppTheme>(() => prefersDarkMode ? 'dark' : 'light');

  const isLightTheme = (): boolean => theme === 'light';

  const setAppTheme = (): void => {
    setTheme(() => {
      if (!isLightTheme())
        document.documentElement.classList.replace('dark', 'light');
      else
        document.documentElement.classList.replace('light', 'dark');
      return isLightTheme() ? 'dark' : 'light'
    });
  }

  useEffect(() => {
    if (!isLightTheme())
      document.documentElement.classList.add('dark');
    else
      document.documentElement.classList.add('light');

    return () => {
      if (isLightTheme()) document.documentElement.classList.remove('light');
      else document.documentElement.classList.remove('dark');
    }
  }, [])

  const contextValue = useMemo(() => ({
    appTheme: theme,
    setAppTheme
  }), [theme, setAppTheme]);


  return <ThemeContext.Provider value={contextValue} > {children}</ThemeContext.Provider >
}

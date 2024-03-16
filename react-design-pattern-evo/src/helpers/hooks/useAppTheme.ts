import { useContext } from 'react';
import { AppTheme, AppThemeContext } from '@commonContexts/theme/types';
import { ThemeContext } from '@commonContexts/theme';

type UseAppTheme = {
  appTheme: AppTheme;
  setAppTheme: () => void;
};

export default function useAppTheme(): UseAppTheme {
  const appThemeContext = useContext<AppThemeContext | undefined>(ThemeContext);

  if (!appThemeContext) throw new Error('A theme context must be provided');

  return appThemeContext;
}

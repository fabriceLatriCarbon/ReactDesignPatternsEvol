export type AppTheme = 'light' | 'dark';

export type AppThemeContext = {
  setAppTheme: () => void;
  appTheme: AppTheme;
};

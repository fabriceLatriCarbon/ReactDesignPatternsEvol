import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@material-tailwind/react';
import AppThemeProvider from '@commonContexts/theme';

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AppThemeProvider>{children}</AppThemeProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };

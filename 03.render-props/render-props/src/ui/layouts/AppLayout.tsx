import React, { PropsWithChildren } from 'react';
import Title from '@ui/headers/Title';

type AppLayoutProps = PropsWithChildren<{}>;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Title>☃️ Temperature Converter 🌞</Title>
      {children}
    </div>
  )
}

export default AppLayout;
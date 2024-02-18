import React, { PropsWithChildren } from 'react';
import Navbar from '@ui/navigation/NavBar';

type AppLayoutProps = PropsWithChildren<{}>;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {

  return (
    <div className='h-screen'>
      <Navbar />
      <div className="flex flex-col h-4/5 items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default AppLayout;
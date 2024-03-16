import React, { PropsWithChildren } from 'react';

type AppLayoutProps = PropsWithChildren<{}>;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {

  return (
    <div className='h-4/5'>
      <div className="flex flex-col h-full items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default AppLayout;
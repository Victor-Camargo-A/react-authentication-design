import React from 'react';
import { Outlet } from 'react-router-dom';

export const LayoutAuth = () => {
  return (
    <div className='flex items-center justify-center min-h-screen m-4'>
        <Outlet/>
    </div>
  )
}

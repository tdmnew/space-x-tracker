import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/layout/Header';

import './Root.css';

const Root: FC = () => {
  return (
    <div className="text-white bg-slate-900 h-screen">
      <Header />

      <div className="p-4 bg-inherit">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

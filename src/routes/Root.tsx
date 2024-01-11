import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/layout/Header';

import './Root.css';

const Root: FC = () => {
  return (
    <div className="text-white bg-slate-900 h-screen">
      <Header />

      <div className="bg-inherit p-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

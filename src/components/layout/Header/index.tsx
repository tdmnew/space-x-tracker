import type { FC } from 'react';

import Link from '@components/common/Link';

const Header: FC = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link className="text-white" href="/">
          Space X Tracker
        </Link>
      </h1>

      <ul className="flex items-center gap-x-2">
        <li>
          <Link href="history">History</Link>
        </li>
        |
        <li>
          <Link href="missions">Missions</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

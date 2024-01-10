import type { FC } from 'react';
import { RotatingLines as LoadingSpinner } from 'react-loader-spinner';

import { useGetAllHistoryQuery } from '@api/spacex/history';
import Link from '@components/common/Link';

const History: FC = () => {
  const { data, isLoading } = useGetAllHistoryQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl underline pb-4">History</h2>

      <div className="flex flex-col gap-y-4">
        {data?.map(({ id, title, details, event_date_utc, links }) => (
          <div key={id} className="border-[1px] p-2">
            <h3 className="bold">
              {event_date_utc.slice(0, 10)}: {title}
            </h3>
            <p>{details}</p>
            {links.article && <Link href={links.article}>Read More</Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;

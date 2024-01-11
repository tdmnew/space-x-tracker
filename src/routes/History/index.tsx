import type { FC } from 'react';

import { useGetAllHistoryQuery } from '@api/spacex/history';
import Error from '@components/common/Error';
import Link from '@components/common/Link';
import LoadingSpinner from '@components/common/LoadingSpinner';

const History: FC = () => {
  const { data, error, isLoading } = useGetAllHistoryQuery();

  if (isLoading) <LoadingSpinner />;
  if (error) <Error />;

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl underline pb-4">History</h2>

      <div className="flex flex-col gap-y-4">
        {data?.map(({ id, title, details, date, article }) => (
          <div key={id} className="border-[1px] p-2">
            <h3 className="bold">
              {date}: {title}
            </h3>
            <p>{details}</p>
            {article && <Link href={article}>Read More</Link>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;

import type { FC } from 'react';

import { useGetAllMissionsQuery } from '@api/spacex/missions';
import Error from '@components/common/Error';
import LoadingSpinner from '@components/common/LoadingSpinner';

const Missions: FC = () => {
  const { data, error, isLoading } = useGetAllMissionsQuery();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl underline pb-4">Missions</h2>

      <div className="flex flex-col gap-y-4">
        {data?.map(({ id, name, description, payload_ids }) => (
          <div key={id} className="border-[1px] p-2">
            <h3 className="pb-2">{name}:</h3>
            <p>{description}</p>

            {payload_ids && (
              <>
                <h4 className="py-2">Payload:</h4>

                <div className="flex flex-col">
                  <ul>
                    {payload_ids.map((payloadId) => (
                      <li key={payloadId}>
                        <a
                          key={payloadId}
                          className="text-blue-500 hover:text-blue-400"
                          href={`/payload/${payloadId}`}
                        >
                          {payloadId}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;

import type { FC } from 'react';
import { RotatingLines as LoadingSpinner } from 'react-loader-spinner';

import { useGetAllMissionsQuery } from '@api/spacex/missions';

const Missions: FC = () => {
  const { data, isLoading } = useGetAllMissionsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl underline pb-4">Missions</h2>

      <div className="flex flex-col gap-y-4">
        {data?.map(({ mission_id, mission_name, description, payload_ids }) => (
          <div key={mission_id} className="border-[1px] p-2">
            <h3 className="pb-2">{mission_name}:</h3>
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

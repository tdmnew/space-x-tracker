import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetOnePayloadQuery } from '@api/spacex/payloads';
import Error from '@components/common/Error';
import LoadingSpinner from '@components/common/LoadingSpinner';

const Payload: FC = () => {
  const { payloadId } = useParams();
  const { data, error, isLoading } = useGetOnePayloadQuery(payloadId);

  if (isLoading) <LoadingSpinner />;
  if (error) <Error />;

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl underline pb-4">Payload</h2>

      <div className="border-[1px] p-2">
        {data ? (
          <>
            <h3 className="pb-2">{data.id}</h3>
            <p>Type: {data.type}</p>
            <p>Manufacturer: {data.manufacturer}</p>
            <p>Nationality: {data.nationality}</p>
            <p>Orbit: {data.orbit}</p>
          </>
        ) : (
          <h3 className="pb-2">No payload found</h3>
        )}
      </div>
    </div>
  );
};

export default Payload;

import type { FC } from 'react';
import { RotatingLines as LoadingSpinner } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

import { useGetOnePayloadQuery } from '@api/spacex/payloads';

const Payload: FC = () => {
  const { payloadId } = useParams();
  const { data, isLoading } = useGetOnePayloadQuery(payloadId);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl underline pb-4">Payload</h2>

      <div className="border-[1px] p-2">
        {data ? (
          <>
            <h3 className="pb-2">{data.payload_id}</h3>
            <p>Type: {data.payload_type}</p>
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

import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError() as Error;

  return (
    <div className="flex justify-center items-center h-full">
      <h2 className="text-2xl">Error</h2>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;

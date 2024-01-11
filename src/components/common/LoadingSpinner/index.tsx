import type { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner: FC = () => (
  <div className="flex justify-center">
    <RotatingLines />
  </div>
);

export default LoadingSpinner;

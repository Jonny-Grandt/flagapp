import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import './SkeletonCard.css';

export default function SkeletonCard() {
  return (
    <div className="card-container">
      <Skeleton variant="rectangular" width={270} height={140} />
      <div className="text-container">
        <Skeleton className="h2-tag" variant="text" sx={{ fontSize: '25px' }} />

        <div className="p-container">
          <div className="p-title">Population:</div>
          <Skeleton
            className="p-tag"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
        </div>
        <div className="p-container">
          <div className="p-title">Region:</div>
          <Skeleton
            className="p-tag"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
        </div>
        <div className="p-container">
          <div className="p-title">Capital:</div>
          <Skeleton
            className="p-tag"
            variant="text"
            sx={{ fontSize: '1rem' }}
          />
        </div>
      </div>
    </div>
  );
}

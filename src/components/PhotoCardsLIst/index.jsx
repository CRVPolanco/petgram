import React from 'react';
import { PhotoCard } from '../PhotoCard';

const PhotoCardList = () => {
  return(
    <ul style={{ padding: '12px' }}>
      {[1,2,3].map((p) => <PhotoCard />)}
    </ul>
  )
}

export { PhotoCardList };

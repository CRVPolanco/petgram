import React from 'react';
import { PhotoCard } from '../PhotoCard';

const PhotoCardList = () => {
  return(
    <ul>
      {[1,2,3].map((p) => <PhotoCard />)}
    </ul>
  )
}

export { PhotoCardList };

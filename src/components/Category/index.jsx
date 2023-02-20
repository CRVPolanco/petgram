import React from 'react';
import { Anchor, Img } from './CategoryStyled';

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {

  return(
    <Anchor href={path} target="_blank">
      <Img src={cover} />
      {emoji}
    </Anchor>
  )
}

export { Category }

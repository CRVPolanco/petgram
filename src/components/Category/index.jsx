import React from 'react';

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {

  return(
    <a href={path} target="_blank">
      <img src={cover} alt="cover" />
      {emoji}
    </a>
  )
}

export { Category }

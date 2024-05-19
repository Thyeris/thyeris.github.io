import React from 'react';

const Icons = ({ url, img, name }) => {
  return (
    <a href={url} target="_blank">
      <img src={img} alt={name} title={name} />
    </a>
  );
};

export default Icons;

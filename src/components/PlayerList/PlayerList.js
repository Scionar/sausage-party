import React from 'react';
import './PlayerList.scss';

const PlayerList = ({ className, ...props }) => (
  <ul className={`player-list ${className}`} {...props} />
);

export default PlayerList;

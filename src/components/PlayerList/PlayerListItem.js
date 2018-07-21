import React from 'react';
import './PlayerListItem.scss';

const PlayerListItem = ({ className, ...props }) => (
  <li className={`player-list__item ${className}`} {...props} />
);

export default PlayerListItem;

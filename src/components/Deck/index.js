import React from 'react';
import './Deck.scss';

const Deck = ({ className, ...props }) => (
  <div className={`deck ${className}`} {...props} />
);

export default Deck;

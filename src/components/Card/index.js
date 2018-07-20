import React from 'react';
import './Card.scss';

const Card = ({ className, ...props }) => (
  <div className={`card ${className}`} {...props} />
);

export default Card;

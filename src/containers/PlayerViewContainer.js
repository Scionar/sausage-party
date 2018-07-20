import React, { Component } from 'react';
import { Deck } from '../components';

export class PlayerViewContainer extends Component {
  render() {
    return (
      <div className="player-view-container">
        <h1>Player view</h1>
        <Deck />
      </div>
    );
  }
}

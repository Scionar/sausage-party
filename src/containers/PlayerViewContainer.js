import React, { Component } from 'react';
import { Deck } from 'components';

class PlayerViewContainer extends Component {
  render() {
    return (
      <div className="player-view-container">
        <h1>Player view</h1>
        <Deck />
      </div>
    );
  }
}

export default PlayerViewContainer;

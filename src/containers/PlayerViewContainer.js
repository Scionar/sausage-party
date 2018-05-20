import React, { Component } from 'react';
import Card from '../components/Card';

export class PlayerViewContainer extends Component {
  render() {
    return (
      <div className="player-view-container">
        <h1>This is a player view container.</h1>
        <Card />
      </div>
    );
  }
}

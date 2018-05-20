import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

export class GameViewContainer extends Component {
  render() {
    return (
      <div className="game-view-container">
        <h1>This is a game view container.</h1>
        <Link to="/player">Link to player</Link>
        <Card />
      </div>
    );
  }
}

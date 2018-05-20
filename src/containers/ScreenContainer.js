import React, { Component } from 'react';
import Card from '../components/Card';

export default class ScreenContainer extends Component {
  render() {
    return (
      <div className="screen-container">
        <h1>This is a screen ontainer.</h1>
        <Card />
      </div>
    );
  }
}

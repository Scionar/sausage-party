import React, { Component } from 'react';
import Card from '../components/Card';

export default class ScreenContainer extends Component {
  render() {
    return (
      <div className="screen-container">
        This is screen container. <Card />
      </div>
    );
  }
}

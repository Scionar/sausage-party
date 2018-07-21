import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlayerList } from 'components';

class PlayerListContainer extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  renderItems() {
    const maxPlayerAmount = this.props.maxPlayerAmount;
    const resultArray = [];

    for (let i = 0; i < maxPlayerAmount; i++) {
      const player = this.props.players[i];
      if (player) {
        resultArray.push(
          <PlayerList.Item key={i}>{player.name}</PlayerList.Item>
        );
      } else {
        resultArray.push(<PlayerList.Item key={i}>-</PlayerList.Item>);
      }
    }

    return resultArray;
  }

  render() {
    return <PlayerList>{this.renderItems()}</PlayerList>;
  }
}

const mapStateToProps = state => ({
  players: state.players,
  maxPlayerAmount: state.maxPlayerAmount
});

export default connect(mapStateToProps)(PlayerListContainer);

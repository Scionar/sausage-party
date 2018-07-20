import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Deck } from '../components';

class GameViewContainer extends Component {
  render() {
    if (this.props.gameState === 'waiting_players') {
      return <div>Waiting players</div>;
    }

    if (this.props.gameState === 'game_on') {
      return <Deck />;
    }

    return null;
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState
});

export default connect(mapStateToProps)(GameViewContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Deck } from 'components';
import { PlayerListContainer } from 'containers';

class GameViewContainer extends Component {
  render() {
    if (this.props.gameState === 'waiting_players') {
      return (
        <div>
          <h1>Waiting players</h1>
          <PlayerListContainer />
        </div>
      );
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

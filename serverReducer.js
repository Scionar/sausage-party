const defaultState = {
  gameState: 'waiting_players',
  players: [],
  maxPlayerAmount: 3
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

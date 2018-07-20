const defaultState = {
  gameState: 'waiting_players'
};

module.exports = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return { ...action.state };
    default:
      return state;
  }
};

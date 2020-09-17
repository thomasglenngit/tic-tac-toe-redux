export default (state = {}, action) => {
  const { history, stepNumber, xIsNext, key } = action;

   switch (action.type) {
    case "ADD_HISTORY":
      return Object.assign({}, state, {
        [key]: {
          history: history,
          stepNumber: stepNumber,
          xIsNext: xIsNext,
          key:key,
            }
      })
      
      case 'DELETE_TICKET':
      const newState = { ...state };
      delete newState[key];
      return newState;
      default:
        return state;
  }
};
      
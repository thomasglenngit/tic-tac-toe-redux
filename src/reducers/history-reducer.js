export default (state = {}, action) => {
  const { names, location, issue, id } = action;

  switch (action.type) {
    case "ADD_TICKET":
      return Object.assign({}, state, {
        // we use object.assign(method) to clone the object - i.e. copies existing state // first arg must be empty, second is object to be cloned
        [id]: {
          // this is the change we want to make to our object = third argument
          names: names,
          location: location,
          issue: issue,
          id: id,
        },
      });
    case "DELETE_TICKET":
      const newState = { ...state };
      delete newState[id];
      return newState;

    default:
      return state;
  }
};

const shortlistReducer = (state = { accepted: [], rejected: [] }, action) => {
  //   console.log(accepted, rejected);

  if (action.type === "ACCEPT") {
    return {
      ...state,

      accepted: state.accepted.concat(action.payload),
      rejected: state.rejected,
    };
  }
  if (action.type === "REJECT") {
    return {
      ...state,

      accepted: state.accepted,

      rejected: state.rejected.concat(action.payload),
    };
  }
};

export default shortlistReducer;

let initialState = {
    fetchingApplicationGroups: true,
    applicationGroups: {},
  };
  const applicationGroupReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_APPLICATION_GROUPS":
        return {
          ...state,
          applicationGroups: action.payload,
          fetchingApplications: false,
        };
      case "CREATE_APPLICATION_GROUP":
        return {
          ...state,
          applicationGroups: { ...state.applicationGroups, [action.id]: action.payload },
        };
      case "EDIT_APPLICATION_GROUP":
        return {
          ...state,
          applicationGroups: { ...state.applicationGroups, [action.id]: action.payload },
        };
      case "DELETE_APPLICATION_GROUP":
        const applicationGroups = state.applicationGroups;
        delete applicationGroups[action.id];
        return {
          ...state,
          applicationGroups
        };
      default:
        return state;
    }
  };
  
  export default applicationGroupReducer;
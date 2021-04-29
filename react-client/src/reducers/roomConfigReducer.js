const init = {
    config: {}
}


const configReducer = (state = init, action) => {
   switch (action.type) {
        case "ROOM_CONFIG":
          return {
            ...state,
            config: action.payload,
          };

          default:
            return state;
    }
}


export default configReducer
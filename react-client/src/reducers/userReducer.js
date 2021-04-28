const init = {
    user: {
            username: "", 
            room: null
        }
    }
  
    const userReducer = (state = init, action) => {
        switch (action.type) {
        // case "ADD_USER":
        //     return {
        //         ...state,
        //         results: action.payload
        //     };
        case "GET_USER":
            return {
                ...state,
                results: action.payload
            };
        case "SET ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
        }
    };

    export default userReducer;
  
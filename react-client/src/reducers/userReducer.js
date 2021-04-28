const userState = {
    username: "", 
    room: null
}
  
const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                username: action.payload
            };
        case "SET ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;

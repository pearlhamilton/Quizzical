const defaultState = {
    user: { username: "", type: "" },
    id: "",
    room: null
}
  
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                username: action.payload
            };
        case "SET ERROR":
            return { ...state, error: action.payload };
        case "SET_HOST":
            return {
                ...state, 
                user: action.payload,
                room: action.room
            };
        case "SET_PLAYER":
            return {
                ...state, 
                user: action.payload,
                room: action.room
            };
        case "SET_ID":
            return {
                ...state, 
                id: action.payload.id
            };    
        case "RESET_TYPE":
            return defaultState;
        default:
            return state;
    }
};

export default userReducer;

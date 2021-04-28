const setHost = (username, room) => ({
    type: "SET_HOST",
    payload: {username: username, type: "HOST"},
    room: room
});

const setPlayer = (username) => ({
    type: "SET_PLAYER",
    payload: {username: username, type: "PLAYER"}
});

const resetType = () => ({
    type: "RESET_TYPE"
});

export {setHost, setPlayer}
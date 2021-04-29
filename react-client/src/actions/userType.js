const setHost = (username, room) => ({
    type: "SET_HOST",
    payload: {username: username, type: "HOST"},
    room: room
});

const setPlayer = (username, room) => ({
    type: "SET_PLAYER",
    payload: {username: username, type: "PLAYER"},
    room: room
});

const setID = (id) => ({
    type: "SET_ID",
    payload: id
})

const resetType = () => ({
    type: "RESET_TYPE"
});

export {setHost, setPlayer, setID}
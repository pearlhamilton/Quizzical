export const roomConfig = (numberOfQs,subject,difficulty) => {

    let roomConfig = {
        numberOfQs: numberOfQs,
        difficulty: difficulty,
        subject: subject,
    }
console.log(roomConfig)

    return{
        type: "ROOM_CONFIG",
        payload: roomConfig
    }
};



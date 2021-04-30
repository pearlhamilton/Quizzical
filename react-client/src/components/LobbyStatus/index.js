import React, {useState,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { fetchQuiz } from "../../actions";
import { socket } from '../../socket';


const LobbyStatus = ({host}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [ready, setReady] = useState(false)
    const [subject, setSubject] = useState("") //useSelector((state) => state.config.config.subject) //need to change this back into words
    const [difficulty, setDifficulty] = useState("")//useSelector((state) => state.config.config.difficulty)
    const [numberOfQs, setNo] = useState("")//useSelector((state) => state.config.config.numberOfQs ) 
    const room = useSelector((state) => state.user.room)

    const usertype = host//useSelector((state) => state.user.user.type)
    // const usertype = "PLAYER"

    useEffect(() => {
        // const socket = io(serverEndpoint);
        // dispatch(addSocket({ socket }))
        // socket.emit("create", id);
        // socket.on("players-in-room", (list) => {
        //   dispatch(addPlayer(list))
        // });
        // socket.on("player-ready", (socket) => {
        //   dispatch(playerReady(socket))
        // })
        socket.emit('get-questions', room, (res) => {
            console.log(res)
            setSubject(res.subjects);
            setDifficulty(res.difficulty);
            setNo(res.count)
        })




        socket.on('game-start', val =>  setReady(val))
        
    }, [ready]);


console.log(ready)

    const handleClick = (e) => {
        e.preventDefault();

        socket.emit('game-start', room)

        history.push('/quiz');
    }

    
    const join = (e) => {
        e.preventDefault();
        dispatch(fetchQuiz(numberOfQs, subject, difficulty));
        history.push('/quiz');
    }


       //changing subject from number to word
       let subjectWord;

       switch(subject){
           case "9":
               subjectWord = 'General Knowledge';
               break;
           case "12":
               subjectWord = 'Music';
               break;
           case "21":
               subjectWord = 'Sport';
               break;
           case "22":
               subjectWord = 'Geography';
               break;
           case "31":
               subjectWord = 'Anime and Manga';
               break;
           case "26":
               subjectWord = 'Celebrities';
               break;
           default:
               subjectWord = 'Suprise Me'
       }



    if (usertype === "HOST"){
        return (
            <button onClick={handleClick}>Start Game</button> 
            // onclick fetch questions and go to quiz page
            
        )

    }
    else{
        return(
            <>
        {ready ? <button onClick={join}>Play Now!</button> : <p>Waiting for host to start the game...</p>}
        
        <p>You will be answering 
            <span style={{ color: "pink" }}> {numberOfQs} </span> 
            questions about 
            <span style={{ color: "pink" }}> {subjectWord} </span> 
            at difficulty level
            <span style={{ color: "pink" }}> {difficulty} </span> 
        </p>
        </>
        )
    }





}

export default LobbyStatus
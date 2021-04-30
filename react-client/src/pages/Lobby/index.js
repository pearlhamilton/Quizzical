import React, {useState, useEffect} from 'react'
import {LobbyStatus, PlayerBubble} from '../../components'
import {useSelector} from "react-redux"
import "./style.css"
import { socket } from '../../socket'


const Lobby = () => {
    // const players = ['player1', 'player2', 'player3']// this will come from redux 
    const [players, setPlayers] = useState("");
    const room = useSelector((state) => state.user.room)
    const host = useSelector((state) => state.user.user.type);


    
    useEffect(() => {  
        socket.emit('game-players', room, (res) => {
            // console.log(res[0].username)
            // setPlayers(res[0].username)
            const usernames = res.map(el => el.username)
            // console.log(usernames)
            setPlayers(usernames)
            
        })
        socket.on('data', data => console.log(data))
    }, [players]);


    return(
        <div id="Lobby">
            <h2>Lobby</h2>
    
            <LobbyStatus host={host}/> 

            <div id="players">
           
            {players &&
            players.map((player) => <PlayerBubble key={players.indexOf(player)} player={player} />)} 
            
            </div>
           
        </div>
    )
}



export default Lobby
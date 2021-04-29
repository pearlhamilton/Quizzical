import React from 'react'
import {LobbyStatus, PlayerBubble} from '../../components'
import {useSelector} from "react-redux"
import "./style.css"


const Lobby = () => {
    const players = ['player1', 'player2', 'player3']// this will come from redux 

    return(
        <div id="Lobby">
            <h2>Lobby</h2>
    
            <LobbyStatus/> 

            <div id="players">

            {players &&
            players.map((player) => <PlayerBubble key={players.indexOf(player)} player={player} />)} 
            
            </div>
        </div>
    )
}



export default Lobby
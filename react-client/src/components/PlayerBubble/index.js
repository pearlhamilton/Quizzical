import React from "react";
import "./style.css"

const PlayerBubble = (props) => {

    return(
        <p role="playerbubble" className="bubble">{props.player}</p>
    )

}


export default PlayerBubble; 
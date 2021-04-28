import React from 'react'

const Lobby = () => {
    return(
        <>
            <h1>Lobby</h1>
        {/* if host? */}
        <button>Startgame </button>
     
      
        {/* if not host */}
        <div> waiting for the game to start  </div>

        {/* everyone sees how many people are in the loby  */}

        <div>This div shows players in the lobby</div>
        </>
    )
}



export default Lobby
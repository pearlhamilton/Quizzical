import React from "react"
import { useHistory } from 'react-router-dom';

export default function StartAgain(){
    const history = useHistory()
    return (
        <button onClick={history.goBack}>Start Again</button>

    )
}